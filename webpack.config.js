const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/js',
  mode: 'none',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: 'bundle.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}