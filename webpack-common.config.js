'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 8080;
const HOT_MODE = !!process.env.HOT_MODE;

module.exports = () => {
  var webpackConfig = {
    devtool: 'cheap-module-eval-source-map',

    entry: ['./src/index.js'],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: HOT_MODE ? '/' : ''
    },

    module: {
      loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      }, {
        test: /\.(scss|sass)$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')
      }]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        template: 'src/index.html.tmpl',
        inject: true
      })
    ]
  };

  if (HOT_MODE) {
    let publicPath = `http://localhost:${PORT}`;

    webpackConfig.entry.publicPath = publicPath;
    webpackConfig.entry.unshift(`webpack-dev-server/client?${publicPath}`);
    webpackConfig.entry.unshift('webpack/hot/only-dev-server');

    webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  }

  return webpackConfig;
};
