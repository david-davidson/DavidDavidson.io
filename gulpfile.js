'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jscs = require('gulp-jscs'),
	karma = require('gulp-karma'),
	gutil = require('gulp-util'),
	webpack = require('webpack'),
	del = require('del'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),

	buildConfig,
	testConfig;

/**
 * Linting and style
 */

gulp.task('jshint', function() {
	return gulp.src([
		'server.js',
		'gulpfile.js',
		'app/*.js',
	    'app/**/*.js',
	    'test/controllers/*.js'  		
	])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
	return gulp.src([
		'server.js',
        'gulpfile.js',
        'app/*.js',
        'app/**/*.js',
        'test/controllers/*.js'
	])
	.pipe(jscs());
});

/**
 * Webpack
 */

buildConfig = require('./webpack.config.js');
testConfig = require('./test/webpack.config.js');

var _webpack = function(config) {
	
	var compiler = webpack(config);
	
	return function(next) {
		// Note two changes here:
		// * Addition of 'return'
		// * moved 'next()' up into what's returned
		return compiler.run(function(err, stats) {
			if (err) {
				throw new gutil.PluginError('webpack', err);
			}
			gutil.log('webpack', stats.toString({
				hash: true,
				colors: true,
				cached: false
			}));
			next();
		});
	};
};

gulp.task('_clean', [ 'runTests' ], function() {
	del([
		'dist/script.js'
	]);
});

gulp.task('_bundle', [ '_clean' ], _webpack(buildConfig));

gulp.task('bundle', [
		'_clean',
		'_bundle'
	]);

gulp.task('_cleanTests', function() {
	del([
		'test/testBundle.js'
	]);
});

gulp.task('_bundleTests', [ '_cleanTests' ], _webpack(testConfig));

gulp.task('bundleTests', [
		'_cleanTests',
		'_bundleTests',
	]);

/**
 * Other build
 */

gulp.task('sass', [ 'bundle' ], function() {
	gulp.src('./app/styles/styles.scss')
	.pipe(sass())
	.pipe(cssmin())
	.pipe(gulp.dest('./dist'));
});

gulp.task('copy', [ 'bundle' ], function() {
    gulp.src('./app/**/*.{html,png,gif}')
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', [ 'bundle' ], function() {
	gulp.src('./dist/scripts.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));
});

/**
 * Tests
 */

gulp.task('runTests', [ 'bundleTests' ], function() {
	return gulp.src([
		'test/testBundle.js'
	])
	.pipe(karma({
		configFile: 'karma.conf.js',
		action: 'run'
	}))
	.on('error', function(err) {
		throw err;
	});
});

/**
 * Aggregations
 */

gulp.task('test', [
		'bundleTests',
		'runTests'
	]);

gulp.task('default', [
		'jshint',
		'jscs',
		'test',
		'bundle',
		'uglify',
		'sass',
		'copy'
	]);

// To do:
//
// Add watch
// Add server
// Compress images and HTML