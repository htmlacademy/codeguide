'use strict';

const path = require('path');
const webpack = require('webpack');
const options = require(path.resolve('config/kit'));

let files = {};
options.entry.js.forEach(function(file) {
  files[path.basename(file, '.js')] = './js/' + file;
});

module.exports = {
  context: path.resolve('app'),

  entry: files,

  output: {
    path: path.resolve('build/js'),
    filename: '[name].js',
    pathinfo: true
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|build/,
      loader: 'babel-loader',
      query: {
        optional: 'runtime',
        stage: 1,
        cacheDirectory: true
      }
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
