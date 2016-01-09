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

gulp.task('jasmine', function () {
    return gulp.src(['spec/**/*Spec.js'])
        .pipe(webpack(objectAssign({}, webpackConfiguration, {watch: true})))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

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

gulp.task('sass', function () {
    return gulp.src(path.join(__dirname, 'src/stylesheets/**/*.sass'))
        .pipe(sass())
        .pipe(gulp.dest(path.join(__dirname, 'tmp')))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(path.join(__dirname, 'assets')));
});

gulp.task('sass:watch', function () {
    gulp.watch(path.join(__dirname, 'src/stylesheets/**/*.sass'), ['sass']);
});