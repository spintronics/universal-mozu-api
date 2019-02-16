import appContext from './mozu.test.app.config.json'
import userContext from './mozu.test.user.config.json'
import Api from '../api'
import { log, id } from '../util'
import assert from 'assert'
// import BuiltApi from '../index'

let verbose = false

let api = Api(appContext, {
  hooks: {
    beforeRequest: verbose && log
  }
})

// let builtApi = BuiltApi(appContext, {
//   hooks: {
//     beforeRequest: verbose && log
//   }
// })

let apiFuture = Api(userContext, {
  useFutures: true,
  hooks: {
    beforeRequest: verbose && log
  },
  auth: api.auth
})

let productTest = api =>
  api
    .getClient('commerce.catalog.admin.product')
    .chain(client => {
      return client.getProducts({ pageSize: 1 })
    })
    .map(function(products) {
      assert.ok(products.data && products.data.items, 'getProducts ' + products)
    })

apiFuture
  .all(3, [productTest(apiFuture)].map(f => f.fold(assert.fail, id)))
  .fork(log, log)

// api
//   .all(
//     3,
//     [
//       productTest(api),
//       api.getClient('good gravy').then(assert.fail, assert)
//     ].map(p => p.mapRej(e => e))
//   )
//   .then(r => r.filter(Boolean))
//   .then(log)

// builtApi
//   .all(
//     3,
//     [
//       productTest(builtApi),
//       builtApi.getClient('good gravy').then(assert.fail, assert)
//     ].map(p => p.catch(e => e))
//   )
//   .then(log)
