const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/js',
  mode: 'none',
  entry: {
    index: './index.js',
    room:  './room.js',
    login:  './login.js',
    logout:  './logout.js',
    // firebase: './firebase.js'
  },
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}