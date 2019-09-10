// import axiosClient from 'requestClient'
import definition from './definition.js'
import {
  reduce,
  keys,
  toPairs,
  values,
  set,
  lensProp,
  merge,
  compose,
  join,
  addIndex,
  split,
  replace,
  curryN,
  omit,
  map,
  propOr,
  test,
  match,
  mergeDeepRight
} from 'ramda/es'
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
  hooks: ['beforeRequest', 'withRequest', 'afterResolve', 'afterReject'],
  hookReference: {
    beforeRequest:
      'accepts as the first parameter the request configuration options and should return a modified version',
    withRequest:
      'accepts as the first parameter and should return the promise that will be returned by the request method',
    afterResolve:
      'accepts as the first parameter and should return the response that will occur after the request promise settles',
    afterReject:
      'accepts as the first parameter and should return the error that occurs after the request rejects'
  },

  defaultOptions: {
    hooks: {},
    apiBasePath: '/api',
    requestClient: () => Promise.reject('requestClient not defined')
  },

  delimiter: '_'
})

let api = {
  setContext(context = {}, options = CONSTANTS.defaultOptions) {
    options = Object.assign({}, CONSTANTS.defaultOptions, options)
    context.homePod =
      context.baseUrl || context.homePod || 'https://home.mozu.com/'
    context.pciPod =
      context.basePciUrl || context.pciPod || 'https://pmts.mozu.com/'
    context.tenantPod =
      context.tenantPod || `https://t${context.tenant}.sandbox.mozu.com/`

    let headerDefaults = {
      VERSION: constants.version,
      DATAVIEWMODE: constants.dataViewModes.LIVE
    }

    let normalizedContextKeys = reduce(
      (keyMap, key) => {
        keyMap[key.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()] = key
        return keyMap
      },
      {},
      keys(context)
    )

    //set default headers
    this.headers = reduce(
      (headers, [key, name]) => {
        var value =
          context[normalizedContextKeys[key] || key] || headerDefaults[key]
        if (value) headers[constants.headerPrefix + name] = value
        return headers
      },
      {},
      toPairs(constants.headers)
    )

    api.methods = values(constants.verbs).map(v => v.toLowerCase())

    if (CONSTANTS.isServer) {
      api.headers['User-Agent'] = `K Isomorphic SDK v${
        constants.version
      } (Node.js ${process.version}; ${process.platform} ${process.arch})`
    }

    this.hookMap = CONSTANTS.hooks.reduce(
      (acc, hookName) =>
        set(
          lensProp(hookName),
          ifType('Function', options.hooks[hookName], x => x),
          acc
        ),
      {}
    )

    Object.assign(this, {
      context,
      options: merge(CONSTANTS.defaultOptions, options),
      definition
    })

    return this
  }
}

// let api = {}

//#region request handler

api.parseTemplate = (context = {}, template = '', data = {}) => {
  /**
   * replace +contextVars from context map. template variables
   * and query parameters will both be in data. replace the appropriate
   * key in the template string and return a map containing the used keys
   * so that the request handler can remove them from the body if it is a post
   * request.
   */
  let usedKeys = []
  let url = compose(
    join('?'),
    addIndex(map)((l, x) =>
      x
        ? l
            .filter(v => v[1])
            .map(m => m.join('='))
            .join('&')
        : l
    ),
    addIndex(map)((c, x) => (x ? c.split('&').map(q => q.split('=')) : c)),
    split('?'),
    replace(constants.templateBraceRegex, str => {
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
api.request = curryN(4, function(
  clientPath = [],
  method,
  templateOrId,
  data = {},
  requestOptions = {}
) {
  let context = requestOptions.context || api.context || {}
  //data is overloaded.. it fills in template keys and is sent as the body
  //if the method is PUT/POST. this was changed in node-sdk at some point
  //if it becomes a problem consider removing used keys from body
  //also consider removing items from the body that are used in the template

  var { url, usedKeys } = api.parseTemplate(context, templateOrId, data)

  if (CONSTANTS.isServer) {
    var config = mergeDeepRight(
      {
        headers: api.headers,
        method,
        url
      },
      omit(['context'], requestOptions)
    )
    // console.log(api.headers)

    if (
      [constants.verbs.POST, constants.verbs.PUT]
        .map(str => str.toLowerCase())
        .includes(method.toLowerCase())
    ) {
      if (requestOptions.body) config.data = requestOptions.body
      else config.data = omit(usedKeys, data)
    }

    if (requestOptions.internal) delete config.headers
  } else {
    //call api.request from server with the arguments passed in the body of the client request
    config = {
      method: 'POST',
      url: api.options.apiBasePath,
      data: { args: Array.from(arguments) },
      headers: {}
    }
  }

  //this is mainly being used to prevent infinite recursion from the auth step
  //it might not be necessary anymore
  if (requestOptions.internal) return api.options.requestClient(config)

  config = api.hookMap.beforeRequest(config)

  if (config instanceof Promise) return config

  return api
    .auth(merge({ context }, config))
    .then(config => {
      console.log(config)
      return api.hookMap.withRequest(api.options.requestClient(config))
    })
    .then(response => {
      return api.hookMap.afterResolve(response)
    })
    .catch(error => {
      return Promise.reject(api.hookMap.afterReject(error))
    })
})

//#endregion request handler

//#region expand and build service tree / methods
let templateReference = definition.reference.template
let uncompressedServices = map(
  compose(
    replace('~', ''),
    join(''),
    map(piece => propOr(piece, piece, templateReference)),
    splitWhenStr(test(constants.urlTemplateSplitRegex))
  ),
  uncompressFlattened(definition, CONSTANTS.delimiter)
)
//client tree
let services = crawl(
  (obj, key, path) => {
    if (!obj.url || !obj.method) return obj
    let { url, method } = obj
    let [route, query = ''] = url.split('?')
    let args = match(constants.templateBraceRegex, route)
      .map(match => {
        let innerMatch = match.substring(1, match.length - 1)
        return innerMatch[0] === '+' ? '' : innerMatch
      })
      .filter(Boolean)
    let params = match(constants.templateBraceRegex, query).map(match => {
      return match.substring(1, match.length - 1)
    })
    let request = api.request(path, method, url)
    //store useful information on the method
    request.url = url
    request.method = method
    request.args = args
    request.params = params
    request.path = path
    return request
  },
  unflatten(uncompressedServices, {
    delimiter: CONSTANTS.delimiter
  })
)

Object.assign(api, services)

api.auth = authenticate(api)

//#endregion expand and build service tree / methods

export default api
