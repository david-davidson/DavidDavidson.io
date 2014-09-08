module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    'views/directives/*',
                    'views/*',
                    'images/*'
                    ],
                dest: 'dist/',
                filter: 'isFile'
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
                    'clean',
                    'copy',
                    'sass',
                    'cssmin',
                    'concat',
                    'uglify'
                ],
                options: {
                    livereload: false // true if using express/open
                }
            }
        },
        jshint: {
            files: [
                'server.js',
                'app/app.js',
                'app/models/*.js',
                'app/controllers/*.js'
            ]
        },
        concat: {
            all: {
                src: [
                    'app/app.js',
                    'app/models/*.js',
                    'app/controllers/*.js'],
                dest: 'dist/scripts.js'
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/scripts.js': ['dist/scripts.js']
                }
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
        }
    });
grunt.registerTask('default', [
    'jshint',
    'clean',
    'copy',
    'sass',
    'cssmin',
    'concat',
    'uglify',
    'watch'
    ]);
};