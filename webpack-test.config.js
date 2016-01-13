'use strict';

var path = require('path');

var webpack = require('webpack');
var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

var webpackConfig = require('./webpack-common.config')();
webpackConfig.entry = ['./spec/support/jasmine.js'];
webpackConfig.module.loaders.unshift({
  test: /\.js$/,
  include: path.join(__dirname, 'spec'),
  loaders: ['babel']
});
webpackConfig.plugins.unshift(new JasmineWebpackPlugin());
webpackConfig.plugins.unshift(new webpack.NormalModuleReplacementPlugin(/\.(scss|sass)$/, 'node-noop'));

module.exports = webpackConfig;