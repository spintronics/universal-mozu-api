const presets = [
  [
    '@babel/env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'usage'
    }
  ]
]

const plugins = ['@babel/plugin-syntax-dynamic-import']

const options = {}

module.exports = Object.assign(options, { presets, plugins })
