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
              // keepalive: true,
              middleware: function(connect, options) {
                return [
                  require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                  connect.static(options.base)
                ];
              }
            },
            livereload: {
              options: {
                open: true
                // base: [
                //   '.tmp',
                //   '<%= yeoman.app %>'
                // ]
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
            files: ['index.html', 'styles/*.scss', 'controllers/*', 'models/*', 'views/*'],
            tasks: ['concat', 'uglify', 'buildcss', 'livereload']
          }
        },
        concat: {
          models : {
              src : [
                  'models/*',
              ],
              dest : 'combinedModels.js',
          },
          controllers : {
            src : [
                  'controllers/*',
              ],
              dest : 'combinedControllers.js'
          }
        },
        uglify: {
          models: {
              files: {
                  'combinedModels.js': ['combinedModels.js']
              }
          }
        },
        cssmin: {
            build: {
                src: 'styles/styles.css',
                dest: 'styles/styles.min.css'
            }
        },
        sass: {
            build: {
                files: {
                    'styles/styles.css': 'styles/styles.scss'
                }
            }
        },
        // Run watch tasks
        watch: {
          js: {
              files: ['controllers/*', 'models/*'],
              tasks: ['uglify']
          },
          css: {
            files: ['styles/*.scss'],
            tasks: ['buildcss']
          }
      }
    });
    grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
    grunt.registerTask('buildcss',  ['sass', 'cssmin']);
    grunt.registerTask('server', ['livereload-start', 'connect', 'open', 'regarde', 'watch']);
};