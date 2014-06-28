// test
module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                    bases: './'
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },
        watch: {
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
                    'cssmin'
                ],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            files: ['app.js', 'models/*.js', 'controllers/*.js']
        },
        concat: {
            all: {
                src: ['app.js', 'models/*', 'controllers/*'],
                dest: 'minified/scripts.js'
            }
        },
        uglify: {
            all: {
                files: {
                    'minified/scripts.js': ['minified/scripts.js']
                }
            }
        },
        cssmin: {
            build: {
                src: 'minified/styles.css',
                dest: 'minified/styles.css'
            }
        },
        sass: {
            build: {
                files: {
                    'minified/styles.css': 'styles/styles.scss'
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
    'express',
    'open', 
    'watch'
    ]);
};
