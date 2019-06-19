export let type = val => {
  return val === null
    ? 'Null'
    : val === undefined
    ? 'Undefined'
    : Object.prototype.toString.call(val).slice(8, -1)
}

export let assign = (ref, val) => (ref = val)

export const mixin = (proto, ...sources) => {
  return Object.assign(Object.create(proto), ...sources)
}

export const toDashCase = str =>
  str.replace(
    /[A-Z]/g,
    match => '-' + match[0].toLowerCase() + match.substring(1)
  )

export const fromDashCase = str =>
  str
    .split('-')
    .reduce((acc, sub) => acc + sub[0].toUpperCase() + sub.substring[1])

const _curryN = (len, fn) => (...args) => {
  if (args.length >= len) return fn(...args)
  if (!args.length) return fn
  return _curryN(len, fn).bind(null, ...args)
}

export const curry = fn => (...args) => {
  return args.length === fn.length
    ? fn(...args)
    : _curryN(fn.length, fn)(...args)
}

export const curryN = curry(_curryN)

export let tryFn = function(fn, args = [], context, oops = console.error) {
  let result
  try {
    result = fn.apply(context || null, args instanceof Array ? args : [args])
  } catch (e) {
    oops(e)
  }
  return result
}

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

export let logWith = w => (...args) => log(...args, w)

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

export let ifType = curry((valueType, value, def) =>
  type(value) === valueType ? value : def || null
)

export let testIsServer = new Function(
  'try {return this===global;}catch(e){return false;}'
)

export let dive = curryN(2, (path = [], obj = {}, def) =>
  (path instanceof Array ? path : path.split('.')).reduce(
    (obj, key, dex, ray) => {
      let last = dex === ray.length - 1
      return obj
        ? obj['@@reduced']
          ? last
            ? obj.value
            : obj
          : obj[key] || (last && def)
        : { '@@reduced': 1, value: def }
    },
    obj
  )
)

export let noop = () => {}

export let id = x => x

export let isFn = x => 'function' === typeof x

export let isObj = x => 'Object' === type(x)

export let isArray = x =>
  Array.isArray ? Array.isArray(x) : type(x) === 'Array'

export let isNull = x => x === null

export let isStr = x => 'string' === typeof x

export let isUndef = x => x === undefined

export let papp = (f, ...args) => f.bind(null, ...args)

export let hasValue = x => !isUndef(x) && !isNull(x) && x !== false

Function.prototype.papp = function(...args) {
  let fn = this
  return function(...newArgs) {
    return fn.apply(this, args.concat(newArgs))
  }
}

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

export const isBuffer = obj => {
  return (
    obj != null &&
    obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  )
}

export const flatMap = (f, a) => {
  return a.chain
    ? a.chain(b => f(b))
    : a.reduce
    ? a.reduce((b, x) => b.concat(x.map ? x.map(f) : f(x)), [])
    : f(a)
}

export const radix = list => {
  let map = list.reduce((m, letter, dex) => {
    m[letter] = dex
    return m
  }, {})
  let reverseMap = Object.entries(map).reduce((a, [key, value]) => {
    a[value] = key
    return a
  }, {})
  let len = list.length

  // let charValue = char => a.charCodeAt(0) - (/[a-z]/i.test(x) ? 97 : 65)
  let toNum = char => map[char]
  let toChar = num => reverseMap[num]
  let parse = str =>
    'string' === typeof str
      ? str.split('').reduce((a, x) => a * len + toNum(x), 0)
      : str
  let stringify = num => {
    if ('number' !== typeof num) return num
    let digit
    let residual = Math.floor(num)
    let result = ''
    do {
      digit = residual % len
      result = toChar(digit) + result
      residual = Math.floor(residual / len)
    } while (residual > 0)
    return result
  }
  let add = (p, x) => {
    let result = parse(p) + x
    return typeof p === 'string' ? stringify(result) : result
  }
  return (value = 'a') => {
    let prop = x => {
      if (x) value = x
      return value
    }
    prop.parse = () => prop(parse(prop()))
    prop.stringify = () => prop(stringify(prop()))
    prop.add = x => prop(add(prop(), x))
    return prop
  }
}

export const base54 = radix(
  flatMap(
    letter => [letter, letter.toUpperCase()],
    'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z'.split('.')
  )
)

export let splitWhenStr = curry((predicate, str) =>
  str
    .split('')
    .reduce(
      (a, x) => {
        if (predicate(x)) a.push([x], [])
        else a[a.length - 1].push(x)
        return a
      },
      [[]]
    )
    .map(s => s.join(''))
)

export const stringAddition = (radix = 36) => (a, b) =>
  (parseInt(a, radix) + parseInt(b, radix)).toString(radix)

export const objSwap = obj =>
  Object.entries(obj).reduce((a, [key, value]) => {
    a[value] = key
    return a
  }, {})

export const compressFlattened = (
  object = {},
  delimiter = '.',
  reference = {}
) => {
  let output = {}
  let base54Key = base54('a')

  for (let [keys, value] of Object.entries(object)) {
    for (let key of keys.split(delimiter)) {
      if (reference[key] === undefined) {
        reference[key] = base54Key()
        base54Key.add(1)
        console.log()
      }
    }
    output[
      keys
        .split(delimiter)
        .map(key => reference[key])
        .join(delimiter)
    ] = value
  }
  return { output, reference: objSwap(reference) }
}

export const uncompressFlattened = (compressed = {}, delimiter = '.') => {
  let { output, reference } = compressed
  return Object.entries(output).reduce((result, [keys, value]) => {
    result[
      keys
        .split(delimiter)
        .filter(Boolean)
        .map(key => reference[key] || key)
        .join(delimiter)
    ] = value
    return result
  }, {})
}

export const flatten = function flatten(target = {}, opts = {}) {
  let {
    delimiter = '.',
    skip = noop,
    safe,
    maxDepth,
    reference = {},
    compress = false
  } = opts
  let output = {}

  function step(object, prev, currentDepth = 1) {
    currentDepth = currentDepth || 1
    Object.entries(object).forEach(([key, value]) => {
      let isArray = safe && Array.isArray(value)
      let newKey = prev ? prev + delimiter + key : key
      let valType = type(value)
      let isObject = valType === 'Object' || valType === 'Array'
      if (
        !isArray &&
        !isBuffer(value) &&
        isObject &&
        !skip(value) &&
        Object.keys(value).length &&
        (!maxDepth || currentDepth < maxDepth)
      )
        return step(value, newKey, currentDepth + 1)
      output[newKey] = value
    })
  }

  step(target)

  if (compress) return compressFlattened(output, delimiter, reference)

  return output
}

export const detectPath = path =>
  'string' === typeof path ? R.split(/[^a-zA-Z0-9]/g, path) : path

export const crawl = curry((process, obj) => {
  let step = (obj, path = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (type(value) === 'Object' || type(value) === 'Function') {
        path.push(key)
        obj[key] = step(process(value, key, [...path], obj), path)
        path.pop()
      }
    })
    return obj
  }
  return step(obj)
})

export const unflatten = (target = {}, opts = {}) => {
  let { delimiter = '.', overwrite, object, reference = {} } = opts

  let isbuffer = isBuffer(target)
  if (isbuffer || type(target) !== 'Object') return target

  let parseKey = key => (isNaN(key) && parseInt(key)) || key

  return Object.keys(target)
    .sort((a, b) => a.length - b.length)
    .reduce((result, joinedKey) => {
      let split = joinedKey.split(delimiter)
      if (reference) split = split.map(key => reference[key] || key)
      let key1 = parseKey(split.shift())
      let key2 = parseKey(split[0])
      let container = result

      while (key2 !== undefined) {
        let vType = type(container[key1])
        let isObject = vType === 'Object' || vType === 'Array'
        if (!overwrite && !isObject && typeof container[key1] !== 'undefined') {
          return result
        }
        if (
          (overwrite && !isObject) ||
          (!overwrite && container[key1] == null)
        ) {
          container[key1] = typeof key2 === 'number' && !object ? [] : {}
        }
        container = container[key1]
        if (split.length > 0) {
          key1 = parseKey(split.shift())
          key2 = parseKey(split[0])
        }
      }

      container[key1] = unflatten(target[joinedKey])

      return result
    }, {})
}
