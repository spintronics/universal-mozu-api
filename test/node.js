import appContext from './mozu.test.app.config.json'
// import userContext from './mozu.test.user.config.json'
import Api from '../index.js'
import { log, id } from '../util'

let verbose = false

let api = Api(appContext, {
  hooks: {
    beforeRequest: verbose && log
  }
})

api.commerce.catalog.admin.product
  .getProducts({ pageSize: 1 })
  .then(console.log, console.error)
