import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default {
  input: 'api.js',
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'mozu-universal-api',
    compact: true
  },
  plugins: [
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    json(),
    commonjs({
      sourceMap: false
    }),
    babel({ exclude: 'node_modules/**' })
  ]
}
