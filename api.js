import axiosClient from 'axios'
import Future from 'fluture'
import defaultDefinition from './definition.js'
import R from './ramda'
import {
  testIsServer,
  ifType,
  unflatten,
  isFn,
  isObj,
  uncompressFlattened,
  log,
  splitWhenStr,
  mixin,
  crawl,
  assign,
  toDashCase,
  fromDashCase
} from './util'
import constants from './constants'
import authenticate from './authenticate'
import storefrontReference from './storefront-reference.json'
// import circularJson from 'circular-json'

const isServer = testIsServer()

const hooks = ['beforeRequest', 'withRequest', 'afterRequest']

const hookReference = {
  beforeRequest:
    'accepts as the first parameter the request configuration options and should return a modified version',
  withRequest:
    'accepts as the first parameter and should return the future or promise that will be returned by the request method',
  afterRequest:
    'accepts as the first parameter and should return the response that will occur after the request promise/future settles'
}

const defaultOptions = {
  useFutures: true,
  hooks: {}
}

const delimiter = '_'

const detectPath = path =>
  'string' === typeof path ? R.split(/[^a-zA-Z0-9]/g, path) : path

let Api = (
  context = {},
  options = defaultOptions,
  definition = defaultDefinition
) => {
  console.time('construct api')

  let api = {}
  let proto = {}

  //#region promise interop

  if (!options.useFutures) {
    if (typeof Promise === 'undefined') options.useFutures = true
    else {
      // let promiseThroat = R.curry(throat(Promise))
      Promise.prototype.chain = Promise.prototype.map = Promise.prototype.then
      Promise.prototype.forkCatch = Promise.prototype.catch
      Promise.prototype.chainRej = Promise.prototype.mapRej = function(
        handler
      ) {
        return this.then(null, handler)
      }
      Promise.prototype.fork = function(rej, res) {
        return this.then(res, rej)
      }
      Promise.of = Promise.resolve

      Promise.parallel = (concurrency = 1, promiseList = []) => {
        // return Promise.all(
        //   promiseList.map(promise =>
        //     isFn(promise) ? promiseThroat(concurrency, promise) : promise
        //   )
        // )
        return Promise.all(promiseList)
      }
    }
  }

  proto.task = options.useFutures ? Future : Promise
  proto.resolve = proto.task.of.bind(proto.task)
  proto.reject = proto.task.reject.bind(proto.task)
  proto.all = proto.task.parallel
  proto.newTask = options.useFutures
    ? Future
    : handler => new Promise((resolve, reject) => handler(reject, resolve))

  //#endregion promise interop

  //#region set context

  if (isServer) {
    if (context && context.apiContext) context = context.apiContext
    if (process.env.mozuHosted) {
      try {
        let conf = JSON.parse(process.env.mozuHosted).sdkConfig
        context = R.mergeDeepRight(context, conf)
      } catch (e) {
        console.error(e)
      }
    }
  } else {
    let contextPreload = document.getElementById('data-mz-preload-apicontext')
    let contextPreloadText =
      contextPreload &&
      (contextPreload.textContent ||
        contextPreload.innerText ||
        contextPreload.text ||
        contextPreload.innerHTML)
    try {
      let contextJSON = contextPreloadText && JSON.parse(contextPreloadText)
      if (contextJSON.headers) {
        context = R.mergeDeepRight(
          context,
          R.toPairs(contextJSON.headers).reduce((a, [key, v]) => {
            a[fromDashCase(key.replace(constants.headerPrefix, ''))] = v
            return a
          }, {})
        )
      }
      if (contextJSON.urls) {
        storefrontReference.urls = contextJSON.urls
      }
    } catch (e) {
      console.error(e)
    }
  }

  let headerDefaults = {
    VERSION: constants.version,
    DATAVIEWMODE: constants.dataViewModes.LIVE
  }

  let normalizedContextKeys = R.reduce(
    (keyMap, key) => {
      keyMap[key.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()] = key
      return keyMap
    },
    {},
    R.keys(context)
  )

  context.homePod =
    context.baseUrl || context.homePod || 'https://home.mozu.com/'
  context.pciPod =
    context.basePciUrl || context.pciPod || 'https://pmts.mozu.com/'
  context.tenantPod =
    context.tenantPod || `https://t${context.tenant}.sandbox.mozu.com/`

  proto.context = context
  proto.options = options

  proto.headers = R.reduce(
    (headers, [key, name]) => {
      var value =
        proto.context[normalizedContextKeys[key] || key] || headerDefaults[key]
      if (value) headers[constants.headerPrefix + name] = value
      return headers
    },
    {},
    R.toPairs(constants.headers)
  )

  proto.methods = R.values(constants.verbs).map(v => v.toLowerCase())

  if (isServer) {
    proto.headers['User-Agent'] = `Mozu Universal SDK v${
      constants.version
    } (Node.js ${process.version}; ${process.platform} ${process.arch})`
  }

  //#endregion set context

  //#region request handler

  proto.axios = options.useFutures ? Future.encaseP(axiosClient) : axiosClient

  proto.parseTemplate = (context = {}, template = '', data = {}) => {
    let usedKeys = []
    let url = R.compose(
      R.join('?'),
      R.addIndex(R.map)((l, x) =>
        x
          ? l
              .filter(v => v[1])
              .map(m => m.join('='))
              .join('&')
          : l
      ),
      R.addIndex(R.map)((c, x) =>
        x ? c.split('&').map(q => q.split('=')) : c
      ),
      R.split('?'),
      R.replace(constants.templateBraceRegex, str => {
        let fromContext = str[1] === '+'
        let key = str.slice(1 + fromContext, str.length - 1)
        let value =
          (fromContext ? context : data)[key] ||
          (fromContext ? constants.baseUrl : '')
        if (value) usedKeys.push(key)
        return value
      })
    )(template)
    return { url, usedKeys }
  }

  let queryStringReducer = (acc, [key, value], dex, pairs) =>
    acc +
    (!dex ? '?' : '') +
    key +
    '=' +
    value +
    (dex < pairs.length - 1 ? '&' : '')

  proto.parseStorefrontTemplate = (
    context = storefrontReference.urls,
    template = '',
    data = {}
  ) => {
    //ignoring the explode operator bc it is only used by entity
    //and i don't care about that
    let usedKeys = []
    R.replace()
    let url = R.replace(
      constants.templateBraceRegex,
      str => {
        let innerMatch = str.substring(1, str.length - 1)
        if (innerMatch[0] === '+') {
          return api.storefrontReference.urls[innerMatch.substring(1)]
        }
        if (innerMatch[0] === '?') {
          let values =
            innerMatch === '?_*'
              ? data
              : R.pick(innerMatch.substring(1).split(','), data)
          usedKeys.concat(Object.keys(values))
          return R.compose(
            R.reduce(queryStringReducer, ''),
            R.toPairs
          )(values)
        }
        let value = data[innerMatch]
        if (value) usedKeys.push(value)
        return value || ''
      },
      template
    )
    return { url, usedKeys }
  }

  api.request = R.curryN(
    3,
    (method, templateOrId, data = {}, requestOptions = {}) => {
      let context = requestOptions.context || api.context || {}
      let headers = requestOptions.headers || api.headers || {}
      let returnType = requestOptions.returnType || ''
      let storefrontAction = requestOptions.storefrontAction
      //check for storefront interface id
      //data is overloaded.. it fills in template keys and is sent as the body
      //if the method is PUT/POST. this was changed in node-sdk at some point
      //if it becomes a problem consider removing used keys from body
      //also consider removing items from the body that are used in the template

      let { url, usedKeys } = api[
        storefrontAction ? 'parseStorefrontTemplate' : 'parseTemplate'
      ](context, templateOrId, data)

      let config = R.merge(requestOptions.config || {}, {
        headers,
        method,
        url
      })

      if (
        [constants.verbs.POST, constants.verbs.PUT]
          .map(str => str.toLowerCase())
          .includes(method.toLowerCase())
      ) {
        config.data = R.omit(usedKeys, data)
      }

      if (requestOptions.internal) return api.axios(config)

      config = api.hookMap.beforeRequest(config)

      return api.hookMap.withRequest(
        api
          .auth(R.merge({ context }, config))
          .chain(api.axios)
          .map(response => {
            if (returnType) {
              let apiMethods = R.compose(
                R.reduce((a, key) => {
                  let camel = fromDashCase(key)
                  a[camel] = api.action.bind(returnType, camel)
                  return a
                }, {}),
                R.keys,
                R.pathOr({}, ['methods', returnType])
              )
              response.data = mixin(apiMethods, response.data)
            }
            if (!requestOptions.preserveRequest) response = response.data
            return api.hookMap.afterRequest(response)
          })
      )
    }
  )

  //#endregion request handler

  //#region set hookMap

  proto.hookMap = hooks.reduce(
    (acc, hookName) =>
      R.set(
        R.lensProp(hookName),
        ifType('Function', options.hooks[hookName], x => x),
        acc
      ),
    {}
  )

  //#endregion set hookMap

  //#region expand template and build service tree / methods
  console.time('expand template')
  let templateReference = definition.reference.template
  let uncompressedServices = R.map(
    R.compose(
      R.replace('~', ''),
      R.join(''),
      R.map(piece => R.propOr(piece, piece, templateReference)),
      splitWhenStr(R.test(constants.urlTemplateSplitRegex))
    ),
    uncompressFlattened(definition, delimiter)
  )
  let nodeActions = {}
  //client tree
  let services = crawl(
    (obj, key, path) => {
      if (!obj.url || !obj.method) return obj
      let { url, method } = obj
      let [route, query = ''] = url.split('?')
      let args = R.match(constants.templateBraceRegex, route)
        .map(match => {
          let innerMatch = match.substring(1, match.length - 1)
          return innerMatch[0] === '+' ? '' : innerMatch
        })
        .filter(Boolean)
      let params = R.match(constants.templateBraceRegex, query).map(match => {
        return match.substring(1, match.length - 1)
      })
      let name = R.last(key)
      let request = api.request(method, url)
      request.url = url
      request.method = method
      request.args = args
      request.params = params
      request.path = path
      nodeActions[key] = request
      return request
    },
    unflatten(uncompressedServices, {
      delimiter
    })
  )

  console.timeEnd('expand template')

  //api.(set|post|etc)
  let methods = Object.values(constants.verbs).reduce(
    (a, verb) => R.merge({ [verb.toLowerCase()]: api.request(verb) }, a),
    {}
  )

  proto.nodeActions = nodeActions
  proto.storefrontReference = storefrontReference
  proto.storefrontActions = storefrontReference.methods

  //#endregion expand template and build service tree / methods

  proto = R.merge(proto, methods)

  api = mixin(proto, R.merge(api, services))

  //#region api utilities

  //api.client('commerce.order.getOrder', {orderId: 'asdf'})
  api.client = (path = '', ...args) =>
    R.compose(
      client =>
        isObj(client)
          ? api.resolve(client)
          : isFn(client)
          ? client(...args)
          : api.reject(`invalid client path: ${client}`),
      path => R.pathOr(path, detectPath(path), api)
    )(path)

  api.action = (name = '', ...args) => {
    let dashCase = toDashCase(name)
    let splitName = name
      .split('.')
      .map(toDashCase)
      .reverse()
    let nodeAction = nodeActions[name]
    let storefrontAction = R.pathOr(null, splitName, api.storefrontActions)
    if (!nodeAction && !storefrontAction) splitName[1] = 'defaults'
    storefrontAction = R.pathOr(null, splitName, api.storefrontActions)
    if (!nodeAction && !storefrontAction)
      return api.reject('invalid action invocation')
    if (nodeAction) return request(...args)
    return api.request(
      storefrontAction.verb || 'GET',
      storefrontAction.template,
      args[0] || {},
      R.merge(args[1] || {}, {
        returnType: storefrontAction.returnType,
        storefrontAction: 1
      })
    )
  }

  api.actions = nodeActions

  proto.auth = authenticate(api)

  //#endregion api utilities

  console.timeEnd('construct api')
  //api takes 70ms to construct 50 of which is the template expansion
  //compressing the template saved about 100kb (half the size)

  return api
}

Api.hooks = hooks
Api.hookReference = hookReference
Api.defaultOptions = defaultOptions

export default Api
