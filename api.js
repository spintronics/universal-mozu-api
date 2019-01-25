import axiosClient from 'axios'
import Future, { ap } from 'fluture'
import defaultDefinition from './definition.json'
import R from 'ramda'
import {
  flatten,
  testIsServer,
  ifType,
  noop,
  log,
  storage,
  nodeBackToPromise,
  theGoodStuff
} from './util'
import { unflatten } from 'flat'
import constants from './constants'
import authenticate from './authenticate'

/**
 * work in both environments or standalone
 * pass tests from storefront/node sdk
 * retain simplified interface from storefront and some of the utility methods
 * generate typing files
 * --end mvp
 * caching
 */

const isServer = testIsServer()

export const hooks = ['beforeRequest', 'withRequest']

export const defaultOptions = {
  hooks: {},
  useFutures: true
}

let Api = (
  context = {},
  options = defaultOptions,
  definition = defaultDefinition
) => {
  let api = {}

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
      keyMap[key.replace(/[^0-9a-z]/g, '').toUpperCase()] = key
    },
    {},
    R.keys(context)
  )

  let flatServices = flatten(definition, '.', service => service.url)

  let methodNames = R.compose(
    R.uniq,
    R.map(R.pick('method'))
  )(flatServices)

  //#region reserved

  let reservedProperties = ['axios', 'request', 'parseTemplate']

  api.axios = Future.encaseP(axiosClient)

  api.parseTemplate = (context = {}, template = '', data = {}) => {
    return R.compose(
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
      R.replace(/\{([^}]+)\}/g, str => {
        let fromContext = str[1] === '+'
        return (
          (fromContext ? context : data)[
            str.slice(1 + fromContext, str.length - 1)
          ] || (fromContext ? constants.baseUrl : '')
        )
      })
    )(template)
  }

  api.request = R.curryN(
    2,
    (method, templateOrId, data = {}, requestOptions = {}) => {
      let requestContext = requestOptions.context || api.context || {}
      let headers = Object.assign(
        requestOptions.headers || {},
        api.headers || {}
      )

      //check for storefront interface id

      let url = api.parseTemplate(requestContext, templateOrId, data)
      // let requiresAuthenticaton = url.includes('admin')
      let { baseUrl = '' } = requestContext

      requestOptions = Object.assign(requestOptions, {
        baseURL: baseUrl.includes('https') ? baseUrl : 'https://' + baseUrl,
        headers,
        method,
        url
      })

      if (
        [api.verbs.POST, api.verbs.PUT]
          .map(str => str.toLowerCase())
          .includes(method.toLowerCase())
      ) {
        requestOptions.data = data
      }

      requestOptions = api.hookMap.beforeRequest(requestOptions)

      let request = api.auth(requestOptions).chain(api.axios)

      if (!api.options.useFutures) request = request.promise()

      return api.hookMap.withRequest(request)
    }
  )

  //#endregion reserved

  //client tree
  let tree = R.reduce(
    (t, [serviceName, service]) =>
      R.mergeDeepRight(
        t,
        unflatten({
          [serviceName]: api.request.bind(api, service.method, service.url)
        })
      ),
    {},
    Object.entries(flatServices)
  )

  //api.(set|post|etc)
  let methods = R.reduce(
    (m, methodName) =>
      R.mergeDeepRight(m, {
        [methodName]: methodName.includes('admin')
          ? api.request(methodName)
          : api.request(methodName)
      }),
    {},
    methodNames
  )

  api = R.mergeDeepRight(
    api,
    R.omit(reservedProperties, R.merge(methods, tree))
  )

  api.options = Object.assign(defaultOptions, options)

  api.context = context

  api.auth = authenticate(api)

  api.options = options

  api.verbs = constants.verbs

  api.headerPrefix = constants.headerPrefix || 'x-vol-'

  api.baseUrl = context.baseUrl || 'https://home.mozu.com/'

  api.basePciUrl = context.basePciUrl || 'https://pmts.mozu.com/'

  api.headers = R.reduce(
    (headers, [key, name]) => {
      var value =
        api.context[normalizedContextKeys[key] || key] || headerDefaults[key]
      if (value) headers[key] = value
      return headers
    },
    {},
    R.toPairs(constants.headers)
  )

  api.hookMap = hooks.reduce(
    (acc, hookName) =>
      R.set(
        R.lensProp(hookName),
        ifType('Function', api.options.hooks[hookName]) || (x => x),
        acc
      ),
    {}
  )

  return api
}

Api.hooks = hooks
Api.defaultOptions = defaultOptions

export default Api
