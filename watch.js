const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const rollup = require('rollup')

let options = {
  input: 'api.js',
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'mozu-universal-api',
    sourcemap: 'inline'
  },
  watch: {
    include: ['api.js', 'authenticate.js', 'util.js', 'ramda.js']
  },
  plugins: [
    resolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    json(),
    commonjs({
      sourceMap: false
    }),
    babel({ exclude: 'node_modules/**' })
  ]
}

rollup.rollup(options)

rollup.watch(options)
