var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS2' ],
        singleRun: true,
        frameworks: [ 'jasmine' ],
        reporters: [ 'dots' ],

        files: [
            'tests.webpack.js'
        ],

        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ]
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },

        webpackServer: {
            noInfo: true
        }
    });
};