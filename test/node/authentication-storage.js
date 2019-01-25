'use strict'
var test = require('tape')
var jort = require('jort')
var sinon = require('sinon')
var context = require('../_test-context')
import api from '../../api'
import { log } from 'util'
import circularJson from 'circular-json'

// console.log(api)

var getClient = function() {
  var client = api(context, {
    hooks: {
      beforeRequest: log
    }
  })
  return {
    client: client,
    authGet: sinon.spy(client.authenticationStorage, 'get'),
    authSet: sinon.spy(client.authenticationStorage, 'set')
  }
}

test(
  'transparently authenticates with a typical call to Products',
  { timeout: 20000 },
  function(assert) {
    assert.plan(5)
    var c = getClient()
    // c.client.context.baseUrl = c.client.context.tenantPod = url
    let product = c.client.commerce.catalog.admin.product
    product
      .getProducts({ pageSize: 1 })
      .promise()
      .then(function(products) {
        log('products', products)
        assert.ok(
          c.authGet.calledOnce,
          'authentication Storage.get was called exactly once'
        )
        assert.ok(
          c.authGet.calledBefore(c.authSet),
          'before authentication Storage.set was called'
        )
        assert.ok(
          c.authSet.calledOnce,
          'authentication Storage.set was called exactly once'
        )
        assert.deepEqual(
          c.authSet.firstCall.args[2],
          {
            accessToken: 'app'
          },
          'with app token'
        )
        assert.ok(
          products.hasOwnProperty('items') &&
            products.hasOwnProperty('totalCount'),
          'final call complete'
        )
      })
      .catch(e => {
        log('error', circularJson.stringify(e))
      })
  }
)
