import axiosClient from 'axios'
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
// import circularJson from 'circular-json'

const CONSTANTS = Object.freeze({
  isServer: testIsServer(),
  hooks: ['beforeRequest', 'withRequest', 'afterRequest'],

  hookReference: {
    beforeRequest:
      'accepts as the first parameter the request configuration options and should return a modified version',
    withRequest:
      'accepts as the first parameter and should return the future or promise that will be returned by the request method',
    afterRequest:
      'accepts as the first parameter and should return the response that will occur after the request promise/future settles'
  },

  defaultOptions: {
    hooks: {}
  },

  delimiter: '_',
  apiBasePath: '/api'
})

let Api = (
  context = {},
  options = CONSTANTS.defaultOptions,
  definition = defaultDefinition
) => {
  console.time('construct api')

  /**
   * only the interface intended for use when consuming the library should be exposed on
   * api. everything else will be put in proto.
   */

  let api = {}
  let proto = {}

  //#region set context

  if (CONSTANTS.isServer) {
    // if (context && context.apiContext) context = context.apiContext
    // if (process.env.mozuHosted) {
    //   try {
    //     let conf = JSON.parse(process.env.mozuHosted).sdkConfig
    //     context = R.mergeDeepRight(context, conf)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
  } else {
    // context = {
    //   baseUrl: '/api',
    //   tenantUrl: '/api',
    //   basePciUrl: '/api',
    //   homePod: '/api',
    //   pciPod: '/api'
    // }
    // let contextPreload = document.getElementById('data-mz-preload-apicontext')
    // let contextPreloadText =
    //   contextPreload &&
    //   (contextPreload.textContent ||
    //     contextPreload.innerText ||
    //     contextPreload.text ||
    //     contextPreload.innerHTML)
    // try {
    //   let contextJSON = contextPreloadText && JSON.parse(contextPreloadText)
    //   if (contextJSON.headers) {
    //     context = R.mergeDeepRight(
    //       context,
    //       R.toPairs(contextJSON.headers).reduce((a, [key, v]) => {
    //         a[fromDashCase(key.replace(constants.headerPrefix, ''))] = v
    //         return a
    //       }, {})
    //     )
    //   }
    //   if (contextJSON.urls) {
    //     storefrontReference.urls = contextJSON.urls
    //   }
    // } catch (e) {
    //   console.error(e)
    // }
  }

  let headerDefaults = {
    VERSION: constants.version,
    DATAVIEWMODE: constants.dataViewModes.LIVE
  }

  //all uppercase is a valid key as well
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

  //set default headers
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

  if (CONSTANTS.isServer) {
    proto.headers['User-Agent'] = `K Isomorphic SDK v${
      constants.version
    } (Node.js ${process.version}; ${process.platform} ${process.arch})`
  }

  //#endregion set context

  //#region request handler

  proto.axios = axiosClient

  proto.parseTemplate = (context = {}, template = '', data = {}) => {
    /**
     * replace +contextVars from context map. template variables
     * and query parameters will both be in data. replace the appropriate
     * key in the template string and return a map containing the used keys
     * so that the request handler can remove them from the body if it is a post
     * request.
     */
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

  /**
   * requestOptions should be the same as the axios options with the addition
   * of the ability to pass in the context to make testing easier.
   */
  proto.request = R.curryN(
    3,
    (method, templateOrId, data = {}, requestOptions = {}) => {
      let context = requestOptions.context || api.context || {}
      let headers = requestOptions.headers || api.headers || {}
      //data is overloaded.. it fills in template keys and is sent as the body
      //if the method is PUT/POST. this was changed in node-sdk at some point
      //if it becomes a problem consider removing used keys from body
      //also consider removing items from the body that are used in the template

      if (isServer) {
        var { url, usedKeys } = api.parseTemplate(context, templateOrId, data)

        var config = R.merge(R.omit(['context'], requestOptions), {
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
      } else {
        //call api.request from server with the arguments passed in the body of the client request
        config = {
          method: 'POST',
          url: CONSTANTS.apiBasePath,
          body: JSON.stringify(Array.from(arguments)),
          headers: {
            //userid??
          }
        }
      }

      //this is mainly being used to prevent infinite recursion from the auth step
      //it might not be necessary anymore
      if (requestOptions.internal) return api.axios(config)

      config = api.hookMap.beforeRequest(config)

      return api.hookMap.withRequest(
        api
          .auth(R.merge({ context }, config))
          .then(api.axios)
          .then(response => {
            if (!requestOptions.preserveRequest) response = response.data
            return api.hookMap.afterRequest(response)
          })
      )
    }
  )

  //#endregion request handler

  //#region set hookMap

  proto.hookMap = CONSTANTS.hooks.reduce(
    (acc, hookName) =>
      R.set(
        R.lensProp(hookName),
        ifType('Function', options.hooks[hoCONSTANTS.okName], x => x),
        acc
      ),
    {}
  )

  //#endregion set hookMap

  //#region expand and build service tree / methods
  console.time('expand')
  let templateReference = definition.reference.template
  let uncompressedServices = R.map(
    R.compose(
      R.replace('~', ''),
      R.join(''),
      R.map(piece => R.propOr(piece, piece, templateReference)),
      splitWhenStr(R.test(constants.urlTemplateSplitRegex))
    ),
    uncompressFlattened(definition, CONSTANTS.delimiter)
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
      // let name = R.last(key)
      let request = proto.request(method, url)
      //store useful information on the method
      request.url = url
      request.method = method
      request.args = args
      request.params = params
      request.path = path
      nodeActions[key] = request
      return request
    },
    unflatten(uncompressedServices, {
      delimiter: CONSTANTS.delimiter
    })
  )

  console.timeEnd('expand')

  //api.(set|post|etc)
  let methods = Object.values(constants.verbs).reduce(
    (a, verb) => R.merge({ [verb.toLowerCase()]: proto.request(verb) }, a),
    {}
  )

  proto.nodeActions = nodeActions

  //#endregion expand and build service tree / methods

  // proto = R.merge(proto, methods)

  api = mixin(proto, R.merge(api, services))

  //#region api utilities

  //api.client('commerce.order.getOrder', {orderId: 'asdf'})
  proto.client = (path = '', ...args) =>
    R.compose(
      client =>
        isObj(client)
          ? api.resolve(client)
          : isFn(client)
          ? client(...args)
          : api.reject(`invalid client path: ${client}`),
      path => R.pathOr(path, util.detectPath(path), api)
    )(path)

  proto.auth = authenticate(api)

  //#endregion api utilities

  console.timeEnd('construct api')

  return api
}

Api.hooks = CONSTANTS.hooks
Api.hookReference = CONSTANTS.hookReference
Api.defaultOptions = defaultOptions

export default Api
