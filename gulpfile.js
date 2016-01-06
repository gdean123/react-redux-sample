var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');

var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
var plugin = new JasminePlugin();

var webpackConfiguration = {
    watch: true,
    output: {filename: 'spec.js'},
    plugins: [plugin],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};

gulp.task('jasmine', function () {
    return gulp.src(['spec/**/*Spec.js'])
        .pipe(webpack(webpackConfiguration))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('jasmine-phantom', function () {
    console.log(jasmineBrowser.specRunner({console: true}));
    return gulp.src(['spec/**/*Spec.js'])
        .pipe(webpack(webpackConfiguration))
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless());
});