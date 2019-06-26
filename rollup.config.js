import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'

let input = 'src.js'

let external = ['ramda', 'fluture', 'axios']

let { main } = pkg

let env = process.env.NODE_ENV

export default [
  {
    input,
    output: {
      name: 'mozu-universal-api',
      compact: false,
      format: 'cjs',
      file: main + '.js',
      compress: true
    },
    external,
    plugins: [
      json(),
      resolve({ preferBuiltins: true }),
      babel({ exclude: 'node_modules/**' }),
      commonjs({
        sourceMap: false
      })
    ]
  },
  {
    input,
    output: {
      name: 'mozu-universal-api',
      compact: false,
      format: 'esm',
      file: main + '.mjs',
      compress: true
    },
    external,
    plugins: [
      json(),
      resolve({ preferBuiltins: true }),
      babel({ exclude: 'node_modules/**' }),
      commonjs({
        sourceMap: false
      })
    ]
  },
  {
    input,
    output: {
      name: 'api',
      compact: false,
      banner: '//hey mom!',
      format: 'umd',
      file: main + '.umd.js',
      compact: true
    },
    plugins: [
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      babel({ exclude: 'node_modules/**' }),
      commonjs({
        sourceMap: false
      })
    ]
  }
]
