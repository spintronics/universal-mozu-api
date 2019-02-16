import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import {
  flatten,
  unflatten,
  base54,
  flatMap,
  objSwap,
  splitWhenStr,
  log
} from './util'
import R from './ramda'
import constants from './constants'

let [readdir, stat, readFile, writeFile] = [
  fs.readdir,
  fs.stat,
  fs.readFile,
  fs.writeFile
].map(promisify)

const delimiter = '_'

function walk(dir) {
  return readdir(dir).then(files => {
    return Promise.all(
      files.map(file => {
        const filepath = path.join(dir, file)
        return stat(filepath).then(stats => {
          if (stats.isDirectory()) {
            return walk(filepath)
          } else if (stats.isFile()) {
            return readFile(filepath, 'utf8')
              .then(file => {
                if (!~file.indexOf('Client.method')) return null
                return file
                  .replace(/(\/\/|var).*/g, '')
                  .replace(/[\)\r\t]/g, '')
                  .replace(/Client\.(sub|method)\(/g, '')
                  .replace(
                    /.*\:/g,
                    match => `"${match.substr(0, match.length - 1)}":`
                  )
                  .replace(
                    /constants\.verbs\.[a-zA-Z]*/g,
                    match => `"${match.split('.').pop()}"`
                  )
                  .replace(/\'/g, '"')
                  .split('')
                  .reduce(
                    (acc, char) => {
                      if (acc.result) return acc
                      acc.stack.forEach(array => array.push(char))
                      if (char === '{') acc.stack.push(['{'])
                      if (char === '}') {
                        try {
                          let obj = JSON.parse(acc.stack.pop().join(''))
                          if (!obj.method) acc.result = obj
                        } catch (e) {}
                      }
                      return acc
                    },
                    {
                      result: null,
                      stack: []
                    }
                  ).result
              })
              .then(result => {
                return result
                  ? {
                      [filepath
                        .replace(/[\\\/]/g, '_')
                        .replace(
                          new RegExp(
                            `node_modules\\${delimiter}mozu-node-sdk\\${delimiter}clients\\${delimiter}`
                          ),
                          ''
                        )
                        .replace('.js', '')]: result
                    }
                  : null
              })
          }
        })
      })
    ).then(services => {
      return services
        .filter(Boolean)
        .reduce((all, service) => Object.assign(all, service), {})
    })
  })
}

walk('./node_modules/mozu-node-sdk/clients')
  .then(result => {
    let contextVariables = {
      _tp: '{+tenantPod}',
      _pp: '{+pciPod}',
      _hp: '{+homePod}',
      _g: 'GET',
      _p: 'PUT',
      _u: 'UPDATE',
      _d: 'DELETE',
      _o: 'POST'
    }

    let contextSwap = objSwap(contextVariables)

    let templateReference = {}

    let { output, reference } = flatten(result, {
      compress: true,
      reference: {},
      delimiter
    })

    let templateKey = base54('a')
    let urlTemplateRegex = constants.urlTemplateSplitRegex
    let urlContextRegex = /\{\+([^}]+)\}/

    output = R.map(
      R.compose(
        R.join(''),
        R.addIndex(R.map)((piece, dex) => {
          if (piece[0] !== '_' && !urlTemplateRegex.test(piece)) {
            if (contextSwap[piece]) piece = contextSwap[piece]
            else if (templateReference[piece]) piece = templateReference[piece]
            else {
              templateReference[piece] = templateKey()
              piece = templateKey()
              templateKey.add(1)
            }
          }
          return piece
        }),
        splitWhenStr(R.test(urlTemplateRegex)),
        str =>
          contextSwap[str]
            ? contextSwap[str]
            : str.replace(urlContextRegex, key => contextSwap[key] + '~')
      ),
      output
    )

    return Promise.all([
      writeFile(
        './definition.js',
        `export default {
          output: ${JSON.stringify(output, null, 2)},
          reference: ${JSON.stringify(
            Object.assign(reference, {
              template: Object.assign(
                objSwap(templateReference),
                contextVariables
              )
            }),
            null,
            2
          )}
        }`.replace(/".*":/gm, match => match.replace(/"/g, ''))
      ),
      writeFile(
        './definition.json',
        `${JSON.stringify(unflatten(result, { delimiter }), null, 2)}`
      )
      // writeFile(
      //   './flat-definition.js',
      //   `export default ${JSON.stringify(
      //     flatten(result, { delimiter: '.', skip: service => service.url }),
      //     null,
      //     2
      //   )}`
      // )
    ])
  })
  .catch(console.error)
