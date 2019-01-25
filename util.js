import { fromPairs, toPairs, chain, map, type, curry } from 'ramda'

export let log = (...args) => {
  args.forEach(arg => {
    let stringified
    if ('object' === typeof arg) {
      try {
        stringified = JSON.stringify(arg, null, 2)
      } catch (e) {}
    }
    console.log(stringified || arg)
  })
  return args[0]
}

export let nodeBackToPromise = function(fn, context) {
  return (...args) => {
    // log(args)
    return new Promise((res, rej) => {
      fn.apply(
        context || this,
        args.concat([
          function(err, response, body) {
            if (err) return rej(err)
            return res(body || response)
          }
        ])
      )
    })
  }
}

export let theGoodStuff = promise =>
  promise.then(x => [null, x]).catch(e => [e])

export let ifType = curry((valueType, value) =>
  type(value) === valueType ? value : null
)

export let testIsServer = new Function(
  'try {return this===global;}catch(e){return false;}'
)

export let noop = () => {}

export let storage = function(source) {
  let store = {
    set: function(key, val, expiration) {
      source.setItem(
        key,
        JSON.stringify({
          value: 'object' === typeof val ? JSON.stringify(val) : val,
          expirationDate:
            expiration instanceof Date ? expiration.getTime() : null
        })
      )
    },
    get: function(key) {
      let item = source.getItem(key)
      if (!item) return item
      item = JSON.parse(item)
      if (item.expirationDate && new Date() > new Date(item.expirationDate)) {
        source.removeItem(key)
        return null
      }
      return typeof item.value === 'string' &&
        (item.value[0] === '[' || item.value[0] === '{')
        ? JSON.parse(item.value)
        : item.value
    },
    remove: source.removeItem.bind(source),
    removeItem: source.removeItem.bind(source),
    clear: source.clear.bind(source)
  }
  store.getItem = store.get
  store.setItem = store.set
  return store
}

export const flatten = (obj, delimiter = '.', skip = () => {}) => {
  // log(delimiter, skip, obj)
  const go = obj_ =>
    chain(([k, v]) => {
      if ((type(v) === 'Object' || type(v) === 'Array') && !skip(v)) {
        return map(([k_, v_]) => [`${k}${delimiter}${k_}`, v_], go(v))
      } else {
        return [[k, v]]
      }
    }, toPairs(obj_))

  return fromPairs(go(obj))
}
