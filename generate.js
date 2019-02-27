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
      // writeFile(
      //   './definition.json',
      //   `${JSON.stringify(unflatten(result, { delimiter }), null, 2)}`
      // ),
      // writeFile(
      //   './flat-definition.js',
      //   `export default ${JSON.stringify(
      //     flatten(result, { delimiter: '.', skip: service => service.url }),
      //     null,
      //     2
      //   )}`
      // )
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
        Promise.all([
          prettier.resolveConfig('./index.d.ts'),
          import('./api.js')
        ])
          .then(([options, apiModule]) => {
            let Api = apiModule.default
            let api = Api(exampleConfig)
            // let actions = {}
            // crawl((obj, key, path) => {
            //   if (obj.url && obj.method) {
            //     let { url, method } = obj
            //     let [route, query = ''] = url.split('?')
            //     let args = R.match(constants.templateBraceRegex, route)
            //       .map(match => {
            //         let innerMatch = match.substring(1, match.length - 1)
            //         return innerMatch[0] === '+' ? '' : innerMatch
            //       })
            //       .filter(Boolean)
            //     let params = R.match(constants.templateBraceRegex, query).map(
            //       match => {
            //         return match.substring(1, match.length - 1)
            //       }
            //     )
            //     actions[key] = {
            //       args,
            //       params,
            //       method,
            //       path: path,
            //       action: R.last(path)
            //     }
            //   }
            //   return obj
            // }, R.pick(['commerce', 'content', 'event', 'platform'], api))
            return prettier.format(
              `
                import Future from 'fluture'
                import {AxiosRequestConfig} from 'axios'
                declare function api(
                  context: api.Context,
                  options: api.Options,
                  definition: {
                    output: object
                    reference: object
                  }
                ): api.Api
  
                type Task = Promise & Future
  
                type Method = ${api.methods.reduce(
                  (a, m, i) => a + (i ? ' | ' : '') + `'${m}'`,
                  ''
                )}
                
                
                declare namespace api {
                  interface Api {
                    request(method: Method, templateOrId: string, data?: object, requestOptions?: RequestOptons): Task
                    //first argument is an array or string lens (with any non-character delimiter). if more than one argument is passed and the client exists it will be called with arguments 2..n
                    client(path: string|string[], ...args?: []): Task
                    action(name: string, ...args?: []): Task
                    ${
                      '' /*actions: {
                      ${Object.entries(api.actions).reduce(
                        (a, [name, action]) => {
                          let dataProperties =
                            action.args.reduce(
                              (a, arg) => `${arg}: string;`,
                              ''
                            ) +
                            action.params.reduce(
                              (a, param) => `${param}?: string;`,
                              ''
                            )
                          return (
                            a +
                            `
                              ${name}(data${action.args.length ? '' : '?'}:{
                                ${dataProperties}
                              }, requestOptions: RequestOptions): Task
                            `
                          )
                        },
                        ''
                      )}
                    }*/
                    }
                  }

                  
                  class Api {
                    resolve(value: any): Task
                    reject(value: any): Task
                    all(concurrency: number, taskList: Task[]): Task
                    newTask(reject: function, resolve: function): Task
                    axios(config: AxiosRequestConfig): Task
                    parseTemplate(context: api.context, template: string, data?: object): {url: string, usedKeys: string[]}
                    parseStorefrontTemplate(context: object, template: string, data?: object): {url: string, usedKeys: string[]}
                    auth(config: AxiosRequestConfig): Task
                    task: Task
                    headers: string[]
                    nodeActions: object  
                    storefrontActions: object
                  }
  
                  interface Headers {
                    ${Object.values(constants.headers).reduce(
                      (a, m, i) =>
                        a + `'${constants.headerPrefix + m}': string;`,
                      ''
                    )}
                  }
                  
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
                    headers?: api.Headers
                    context?: api.Context
                    config?: AxiosRequestConfig
                    storefrontAction?: Boolean
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
                }
  
                export default api
              `,
              Object.assign(options, { parser: 'typescript' })
            )
          })
          .then(output => writeFile('./index.d.ts', log(output)))
      })
    ])
  })
  .catch(console.error)
