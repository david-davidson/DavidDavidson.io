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
            files: ['index.html', 'styles/*.scss', 'controllers/*', 'models/*', 'views/*', 'app.js'],
            tasks: ['sass', 'concat', 'uglify', 'cssmin', 'livereload']
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
                  'combinedModels.min.js': ['combinedModels.js']
              },
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
        }
    });
    grunt.registerTask('default', ['livereload-start', 'connect', 'open', 'regarde']);
};