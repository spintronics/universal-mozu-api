const path = require('path')
const webpack = require('webpack')
let config = {
  entry: './api.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'universal-mozu-api',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            // plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  }
}

module.exports = []
