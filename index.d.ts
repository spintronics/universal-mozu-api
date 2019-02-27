import Future from 'fluture'
import { AxiosRequestConfig } from 'axios'
declare function api(
  context: api.Context,
  options: api.Options,
  definition: {
    output: object
    reference: object
  }
): api.Api

type Task = Promise & Future

type Method = 'get' | 'post' | 'put' | 'delete'

declare namespace api {
  interface Api {
    request(
      method: Method,
      templateOrId: string,
      data?: object,
      requestOptions?: RequestOptons
    ): Task
    //first argument is an array or string lens (with any non-character delimiter). if more than one argument is passed and the client exists it will be called with arguments 2..n
    client(path: string | string[], ...args?: []): Task
    action(name: string, ...args?: []): Task
  }

  class Api {
    resolve(value: any): Task
    reject(value: any): Task
    all(concurrency: number, taskList: Task[]): Task
    newTask(reject: function, resolve: function): Task
    axios(config: AxiosRequestConfig): Task
    parseTemplate(
      context: api.context,
      template: string,
      data?: object
    ): { url: string; usedKeys: string[] }
    parseStorefrontTemplate(
      context: object,
      template: string,
      data?: object
    ): { url: string; usedKeys: string[] }
    auth(config: AxiosRequestConfig): Task
    task: Task
    headers: string[]
    nodeActions: object
    storefrontActions: object
  }

  interface Headers {
    'x-vol-app-claims': string
    'x-vol-user-claims': string
    'x-vol-tenant': string
    'x-vol-site': string
    'x-vol-master-catalog': string
    'x-vol-catalog': string
    'x-vol-dataview-mode': string
    'x-vol-version': string
    'x-vol-hmac-sha256': string
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
    useFutures?: boolean
    hooks: {
      //accepts as the first parameter the request configuration options and should return a modified version
      beforeRequest?: function
      //accepts as the first parameter and should return the future or promise that will be returned by the request method
      withRequest?: function
      //accepts as the first parameter and should return the response that will occur after the request promise/future settles
      afterRequest?: function
    }
  }
}

export default api
