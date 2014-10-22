module.exports = function(grunt) {
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Check code
        jshint: {
            files: [
                'server.js',
                'Gruntfile.js',
                'app/*.js',
                'app/**/*.js',
                'tests/controllers/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        jscs: {
            src: [
                'server.js',
                'Gruntfile.js',
                'app/*.js',
                'app/**/*.js',
                'tests/controllers/*.js'
            ],
            options: {
                config: '.jscsrc'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        // Build
        clean: {
            all: {
                src: [
                    'dist/'
                ]
            },
            test: {
                src: [
                    'tests/testBundle.js'
                ]
            }
        },
        browserify: {
            dev: {
                options: {
                    transform: [
                        'debowerify'
                    ],
                    debug: true
                },
                src: [
                    'app/**/*.js'
                ],
                dest: 'dist/scripts.js'
            },
            test: {
                options: {
                    transform: [
                        'debowerify'
                    ],
                    debug: true
                },
                src: [
                    'tests/**/*.js'
                ],
                dest: 'tests/testBundle.js'
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'app/',
                src: [
                    '*.html',
                    '*.pdf', // For the eventual PDF resume
                    'views/directives/*',
                    'views/*',
                    'images/*'
                    ],
                dest: 'dist/',
                filter: 'isFile'
            }
        },
        sass: {
            build: {
                files: {
                    'dist/styles.css': 'app/styles/styles.scss'
                }
            }
        },
        cssmin: {
            build: {
                src: 'dist/styles.css',
                dest: 'dist/styles.css'
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/scripts.js': [
                        'dist/scripts.js'
                    ]
                }
            }
        },

        // Serve and watch
        express: {
            dev: {
                options: {
                    script: 'server.js',
                    background: true // Runs in the background, so we can set up a watch task!
                }
            }
        },
        watch: {
            all: {
                files: [
                    '*.js',
                    'app/*.js',
                    'app/**/*.js',
                    'app/*.html',
                    'app/**/*.html',
                    'app/styles/*.scss'
                ],
                tasks: [
                    'jshint',
                    'jscs',
                    'clean',
                    'browserify:dev',
                    'copy',
                    'sass',
                    'cssmin',
                    'uglify',
                    'express:dev'
                ]
            }
        }
    });
    grunt.registerTask('default', [
        'jshint',
        'jscs',
        'clean',
        'browserify:dev',
        'copy',
        'sass',
        'cssmin',
        'uglify',
        'express:dev',
        'watch'
    ]);
    grunt.registerTask('test', [
    	'jshint',
    	'jscs',
    	'clean:test',
    	'browserify:test',
    	'karma:unit'
    ]);
};