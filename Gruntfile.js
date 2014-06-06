// test
module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    middleware: function(connect, options) {
                        return [
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= connect.all.options.port%>'
            }
        },
        regarde: {
            all: {
                files: [
                    'index.html', 
                    'styles/*.scss', 
                    'controllers/*', 
                    'models/*', 
                    'views/**/*', 
                    'app.js'
                ],
                tasks: [
                    'sass', 
                    'jshint',
                    'concat', 
                    'uglify', 
                    'cssmin', 
                    'livereload'
                ]
            }
        },
        jshint: {
            files: ['app.js', 'models/*.js', 'controllers/*.js']
        },
        concat: {
            all: {
                src: ['app.js', 'models/*', 'controllers/*'],
                dest: 'compressed/scripts.js'
            }
        },
        uglify: {
            all: {
                files: {
                    'compressed/scripts.js': ['compressed/scripts.js']
                }
            }
        },
        cssmin: {
            build: {
                src: 'compressed/styles.css',
                dest: 'compressed/styles.css'
            }
        },
        sass: {
            build: {
                files: {
                    'compressed/styles.css': 'styles/styles.scss'
                }
            }
        }
    });
grunt.registerTask('default', [
    'sass', 
    'jshint',
    'concat', 
    'uglify', 
    'cssmin', 
    'livereload-start', 
    'connect', 
    'open', 
    'regarde'
    ]);
};
