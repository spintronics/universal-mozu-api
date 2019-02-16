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
  crawl
} from './util'
import constants from './constants'
import authenticate from './authenticate'
// import circularJson from 'circular-json'

/**
 * work in both environments or standalone
 * pass tests from storefront/node sdk
 * retain simplified interface from storefront and some of the utility methods
 * generate typing files
 * --end mvp
 * caching
 */

const isServer = testIsServer()

const hooks = ['beforeRequest', 'withRequest']

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
    let headerPreload = document.getElementById('data-mz-preload-apicontext')
    let headerPreloadText =
      headerPreload &&
      (headerPreload.textContent ||
        headerPreload.innerText ||
        headerPreload.text ||
        headerPreload.innerHTML)
    try {
      let headerJSON = headerPreloadText && JSON.parse(headerPreloadText)
      context = R.mergeDeepRight(context, headerJSON)
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

  context.homePod = context.baseUrl || 'https://home.mozu.com/'
  context.pciPod = context.basePciUrl || 'https://pmts.mozu.com/'
  context.tenantPod = `https://t${context.tenant}.sandbox.mozu.com/`

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

  api.request = R.curryN(
    3,
    (method, templateOrId, data = {}, requestOptions = {}, requestContext) => {
      let context = requestContext || api.context || {}
      let headers = requestOptions.headers || api.headers || {}

      //check for storefront interface id
      //data is overloaded.. it fills in template keys and is sent as the body
      //if the method is PUT/POST. this was changed in node-sdk at some point
      //if it becomes a problem consider removing used keys from body
      //also consider removing items from the body that are used in the template

      let { url, usedKeys } = api.parseTemplate(context, templateOrId, data)

      let config = {
        headers,
        method,
        url
      }

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
        api.auth(R.merge({ context }, config)).chain(config => {
          debugger
          return api.axios(config)
        })
      )
    }
  )

  //#endregion request handler

  //#region set hookMap

  api.hookMap = hooks.reduce(
    (acc, hookName) =>
      R.set(
        R.lensProp(hookName),
        ifType('Function', options.hooks[hookName]) || (x => x),
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
  //client tree
  let services = crawl(
    obj => {
      if (!obj.url || !obj.method) return obj
      let request = api.request(obj.method, obj.url)
      request.url = obj.url
      request.method = obj.method
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

  //#endregion expand template and build service tree / methods

  proto = R.merge(proto, methods)

  api = mixin(proto, R.merge(api, services))

  //#region api utilities

  api.getClient = R.compose(
    client =>
      isObj(client)
        ? api.resolve(client)
        : api.reject(`invalid client path: ${client}`),
    path => R.pathOr(path, detectPath(path), api)
  )

  api.action = (path = '', ...args) =>
    R.compose(
      request =>
        isFn(request)
          ? request(args)
          : api.reject(`invalid client path: ${request}`),
      path => R.pathOr(path, detectPath(path), api)
    )(path)

  api.auth = authenticate(api)

  //#endregion api utilities

  console.timeEnd('construct api')
  //api takes 70ms to construct 50 of which is the template expansion
  //compressing the template saved about 100kb (half the size)

  return api
}

Api.hooks = hooks
Api.defaultOptions = defaultOptions

export default Api
