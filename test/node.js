import appContext from './mozu.test.app.config.json'
// import userContext from './mozu.test.user.config.json'
import api from '../src'
import { log, id } from '../util'
import axios from 'axios'
import assert from 'assert'

let verbose = false

api.setContext(appContext, {
  hooks: {
    beforeRequest: verbose && log
  },
  requestClient: axios
})

api.commerce.catalog.admin.product
  .getProducts({ pageSize: 1 })
  .then(console.log)
  .catch(e => {
    debugger
  })
