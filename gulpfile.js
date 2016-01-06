var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');

gulp.task('jasmine', function() {
    var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
    var plugin = new JasminePlugin();

    var webpackConfiguration = {
        watch: true,
        output: {filename: 'spec.js'},
        plugins: [plugin],
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader' }
            ]
        }
    };

    return gulp.src(['spec/**/*Spec.js'])
        .pipe(webpack(webpackConfiguration))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});