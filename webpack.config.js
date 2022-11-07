const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/js',
  mode: 'none',
  entry: {
    index: './index.js',
    room:  './room.js'},
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: '[name].bundle.js'
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