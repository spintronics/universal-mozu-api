import fs from 'fs';
import path from 'path';
import {
  nodeBackToPromise,
} from './util'
import {
  tap,
  mergeDeepRight
} from 'ramda'
import {
  unflatten
} from 'flat'

let log = tap(console.log)


function walk(dir) {
  return nodeBackToPromise(fs.readdir)(dir)
    .then(files => {
      return Promise.all(files.map((file) => {
          // return new Promise((resolve, reject) => {

          const filepath = path.join(dir, file);
          return nodeBackToPromise(fs.stat)(filepath)
            .then(stats => {
              if (stats.isDirectory()) {
                return walk(filepath);
              } else if (stats.isFile()) {
                return nodeBackToPromise(fs.readFile)(filepath, 'utf8')
                  .then(file => {
                    if (!~file.indexOf('Client.method')) return null
                    return file
                      .replace(/(\/\/|var).*/g, '')
                      .replace(/[\)\r\t]/g, '')
                      .replace(/Client\.(sub|method)\(/g, '')
                      .replace(/.*\:/g, match => `"${match.substr(0, match.length - 1)}":`)
                      .replace(/constants\.verbs\.[a-zA-Z]*/g, match => `"${match.split('.').pop()}"`)
                      .replace(/\'/g, '"')
                      .split('')
                      .reduce((acc, char) => {
                        if (acc.result) return acc
                        acc.stack.map(array => array.push(char))
                        if (char === '{') acc.stack.push(['{'])
                        if (char === '}') {
                          try {
                            let obj = JSON.parse(acc.stack.pop().join(''))
                            if (!obj.method) acc.result = obj
                          } catch (e) {}
                        }
                        return acc
                      }, {
                        result: null,
                        stack: []
                      }).result
                  })
                  .then(result => {
                    return result ? ({
                      [
                        filepath
                        .replace(/[\\\/]/g, '.')
                        .replace(/node_modules\.mozu-node-sdk\.clients\./, 'api.')
                        .replace('.js', '')
                      ]: result
                    }) : null
                  })
              }
            })

          // })
        }))
        .then((services) => {
          return services
            .filter(Boolean)
            .reduce((all, service) => Object.assign(all, service), {})
        })
    });
}

walk('./node_modules/mozu-node-sdk/clients')
  .then(result => {
    return nodeBackToPromise(fs.writeFile)('./definition.json', JSON.stringify(unflatten(result), null, 2))
  })
  .then(console.log)
  .catch(console.error)