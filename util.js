export let nodeBackToPromise = function (fn, context) {
  return (...args) => {
    // log(args)
    return new Promise((res, rej) => {
      fn.apply(
        context || this,
        args.concat([
          function (err, response, body) {
            if (err) return rej(err)
            return res(body || response)
          }
        ])
      )
    })
  }
}

export const flatten = (obj, delimiter = '.', skip = () => {}) => {
  // log(delimiter, skip, obj)
  const go = obj_ =>
    chain(([k, v]) => {
      if ((type(v) === 'Object' || type(v) === 'Array') && !skip(v)) {
        return map(([k_, v_]) => [`${k}${delimiter}${k_}`, v_], go(v))
      } else {
        return [
          [k, v]
        ]
      }
    }, toPairs(obj_))

  return fromPairs(go(obj))
}