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
  log,
  crawl
} from './util'
import R from './ramda'
import constants from './constants'
import prettier from 'prettier'
import exampleConfig from './example.config.json'

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
                /**
                 * if there is Client.method in the file remove all variables from
                 * the top and special characters. grab the object argument to client.sub/method
                 * and transform it into a serialzed json object. create a tree that represents
                 * the methods.
                 */
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

    /**
     * flatten the generated definition and split the keys/values on not letters.
     * create a base54 (allowed starting characters for js key) dictonary and store
     * unique strings from the flattened&split definition keys/values.
     */

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
        './definition-uncompressed.js',
        JSON.stringify(result, null, 2)
      ),
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
      ).then(() => {
        Promise.all([prettier.resolveConfig('./api.d.ts'), import('./api.js')])
          .then(([options, apiModule]) => {
            let Api = apiModule.default
            let api = Api(exampleConfig)
            let baseClients = Object.keys(api).reduce((acc, key) => {
              acc[key] = 1
              return acc
            }, {})
            var functions = []

            /**
             * instantiate the api with the newly generated definition. transform the api
             * methods in the tree into a funtion interface that defines the require / optional
             * arguments. flatten the tree and create a map containing each of the node keys on
             * the tree that are not methods. build up an interface that composes them together
             * to match the api tree structure. define the api constructor and write the definition file to
             * the same name as the entry point.
             */
            var definition = `
              declare namespace Api {
                ${R.compose(
                  R.reduce((definition, [key, type]) => {
                    return (
                      definition +
                      (typeof type === 'string'
                        ? type
                        : `
                      interface ${key in baseClients ? '' : 'z_'}${key} {
                        ${Object.keys(type).reduce(
                          (acc, str) => acc + `${str}: z_${str};`,
                          ''
                        )}
                      }
                    `)
                    )
                  }, ''),
                  R.toPairs,
                  R.reduce((acc, [key, type]) => {
                    var split = key.split('.')
                    var end = split.length - 1
                    split.forEach((k, dex) => {
                      if (dex) {
                        if (dex === end) acc[k] = type
                        if (!(split[dex - 1] in acc)) acc[split[dex - 1]] = {}
                        acc[split[dex - 1]][k] = (dex === end ? 'z_' : 'z_') + k
                      } else {
                        if (!(k in acc)) acc[k] = {}
                      }
                    })

                    return acc
                  }, {}),
                  R.toPairs,
                  flatten,
                  crawl((fn, key, path, parent) => {
                    if ('function' !== typeof fn) return fn
                    return `
                      interface ${key}_args {
                        ${fn.args.reduce((a, arg) => `${arg}: string;`, '')}
                        ${fn.params.reduce(
                          (a, param) => `${param}?: string;`,
                          ''
                        )}
                      }
                      interface z_${key} {
                        (config: ${key}_args, options: api.RequestOptions) : Promise
                      }
                    `
                  })
                )(api)}
                interface Context {
                  sharedSecret?: string
                  homePod?: string
                  pciPod?: string
                  tenantPod?: string
                  baseUrl?: string
                  basePciUrl?: string
                  developerAccount?: {
                    emailAddress: string
                  }
                  applicationId: string
                  developerAccountId: number
                  tenant: number
                  site: number
                }
                interface RequestOptions {
                  headers?: Api.Headers
                  context?: Api.Context
                  config?: AxiosRequestConfig
                  internal?: Boolean
                  preserveReqeust?: Boolean
                }
                interface Options {
                  ${Object.entries(Api.defaultOptions).reduce((a, [k, v]) => {
                    return ['hooks'].includes(k)
                      ? a
                      : a + ' ' + k + '?:' + typeof v + ';'
                  }, '')}
                  hooks: {
                    ${Api.hooks.reduce(
                      (a, h) =>
                        a +
                        `\n//${Api.hookReference[h]}\n` +
                        `${h} ?: function;`,
                      ''
                    )}
                  }
                }
                export interface api {
                  setContext(
                    context: Api.Context,
                    options?: Api.Options
                  ): api
                  ${Object.keys(api).reduce(
                    (acc, key) => acc + key + ':' + key + ';',
                    ''
                  )}
                }
              }
              
              declare let api: Api.api

              export default api;
            `
            definition = functions.join('\n') + definition
            return prettier.format(
              definition,
              Object.assign(options, { parser: 'typescript' })
            )
          })
          .then(output => writeFile('./api.d.ts', log(output)))
      })
    ])
  })
  .catch(console.error)
