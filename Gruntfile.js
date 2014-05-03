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
                    'views/*', 
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
            models: {
                src: [
                    'models/*'
                ],
                dest: 'grunted/models.js'
            },
            controllers: {
                src: [
                    'controllers/*'
                ],
                dest: 'grunted/controllers.js'
            }
        },
        uglify: {
            models: {
                files: {
                    'grunted/models.js': ['grunted/models.js']
                },
            },
            controllers: {
                files: {
                    'grunted/controllers.js': ['grunted/controllers.js']
                },
            }
        },
        cssmin: {
            build: {
                src: 'styles/styles.css',
                dest: 'grunted/styles.css'
            }
        },
        sass: {
            build: {
                files: {
                    'styles/styles.css': 'styles/styles.scss'
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
