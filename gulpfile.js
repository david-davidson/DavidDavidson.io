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
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	nodemon = require('nodemon'),
	buildConfig,
	testConfig,
	_webpack;

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

gulp.task('style', [ 
	'jshint',
	'jscs'
]);

/**
 * Reusable webpack helper
 */

buildConfig = require('./webpack.config.js');
testConfig = require('./test/webpack.config.js');

_webpack = function(config) {
	
	var compiler = webpack(config);
	
	return function(next) {
		
		/**
		 * Note two changes here:
		 *	- Addition of 'return'
		 *	- Move 'next()' up into what's returned
		 */

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

/**
 * Test webpack build
 */

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
 * Dist webpack build
 */

gulp.task('_clean', [ 'style' ], function() {
	del([
		'dist/script.js'
	]);
});

gulp.task('_bundle', [ '_clean' ], _webpack(buildConfig));

gulp.task('bundle', [
		'_clean',
		'_bundle'
	]);

/**
 * Test runner
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
 * Assets
 */

gulp.task('sass', function() {
	return gulp.src('app/styles/styles.scss')
	.pipe(sass())
	.pipe(cssmin())
	.pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
	return gulp.src('app/**/*.html')
	.pipe(htmlmin({ 
		collapseWhitespace: true 
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
	return gulp.src('app/**/*.{png,gif}')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('uglify', [ 'bundle' ], function() {
	return gulp.src('dist/scripts.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('assets', [
	'sass',
	'html',
	'images',
	'uglify'
]);

/**
 * Dev server
 */

gulp.task('server', [ 'watch' ], function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});

/**
 * Watch
 */

gulp.task('watch', [ 'bundle', 'assets' ], function() {
	
	gulp.watch('app/styles/*.scss', [ 'sass' ]);

	gulp.watch('app/**/*.html', [ 'html' ]);

	gulp.watch('app/**/*.js', [
		'bundle',
		'uglify'
	]);

});

/**
 * Aggregations
 */

gulp.task('test', [
	'bundleTests',
	'runTests'
]);

gulp.task('default', [
	'style',
	'test',
	'bundle',
	'assets',
	'watch',
	'server'
]);