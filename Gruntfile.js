module.exports = function(grunt) {
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Check code
        jshint: {
            files: [
                'server.js',
                'app/app.js',
                'app/models/*.js',
                'app/controllers/*.js'
            ]
        },
        jscs: {
            src: [
                'app/**/*.js',
                '*.js'
            ],
            options: {
                config: '.jscsrc'
            }
        },

        // Build
        clean: {
            all: {
                src: [
                  'dist/'
                ]
            }
        },
        copy: {
            all: {
                expand: true,
                cwd: 'app/',
                src: [
                    '*.html',
                    '*.pdf', // For the PDF resume
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
                    'dist/styles.css': 'app/views/styles/styles.scss'
                }
            }
        },
        cssmin: {
            build: {
                src: 'dist/styles.css',
                dest: 'dist/styles.css'
            }
        },
        concat: {
            all: {
                src: [
                    'app/app.js',
                    'app/models/*.js',
                    'app/controllers/*.js'
                ],
                dest: 'dist/scripts.js'
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
                    'server.js',
                    'app/app.js',
                    'app/index.html',
                    'app/controllers/*.js',
                    'app/models/*.js',
                    'app/views/**/*.html',
                    'app/views/styles/*.scss'
                ],
                tasks: [
                    'jshint',
                    'jscs',
                    'clean',
                    'copy',
                    'sass',
                    'cssmin',
                    'concat',
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
    'copy',
    'sass',
    'cssmin',
    'concat',
    'uglify',
    'express:dev',
    'watch'
    ]);
};