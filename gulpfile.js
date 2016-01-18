var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var objectAssign = require('object-assign');
var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');

var plugin = new JasminePlugin();

var webpackConfiguration = {
    output: {filename: 'spec.js'},
    plugins: [plugin],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};

gulp.task('jasmine-headless', function () {
    return gulp.src([
        './node_modules/babel-polyfill/dist/polyfill.js',
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        'spec/**/*Spec.js'
    ])
        .pipe(webpack(webpackConfiguration))
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless({driver: 'phantomjs'}));
});
