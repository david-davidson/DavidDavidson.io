module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // express: {
        //     all: {
        //         options: {
        //             port: 9000,
        //             hostname: 'localhost',
        //             livereload: true,
        //             bases: './'
        //         }
        //     }
        // },
        // open: {
        //     all: {
        //         path: 'http://localhost:<%= express.all.options.port%>'
        //     }
        // },
        watch: {
            all: {
                files: [
                    'dist/index.html', 
                    'styles/*.scss', 
                    'controllers/*', 
                    'models/*', 
                    'dist/views/**/*', 
                    'dist/app.js',
                    'server.js'
                ],
                tasks: [
                    'sass', 
                    'cssmin',
                    'jshint',
                    'concat', 
                    'uglify' 
                ],
                options: {
                    livereload: false // true if using express/open
                }
            }
        },
        jshint: {
            files: ['dist/app.js', 'models/*.js', 'controllers/*.js', 'server.js']
        },
        concat: {
            all: {
                src: ['dist/app.js', 'models/*', 'controllers/*'],
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
        cssmin: {
            build: {
                src: 'dist/styles.css',
                dest: 'dist/styles.css'
            }
        },
        sass: {
            build: {
                files: {
                    'dist/styles.css': 'styles/styles.scss'
                }
            }
        }
    });
grunt.registerTask('default', [
    'sass', 
    'cssmin',
    'jshint',
    'concat', 
    'uglify', 
    'watch'
    ]);
};
