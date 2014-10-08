module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/angular.min.js',
                    'js/app.js'
        
                ],
                dest: 'dist/built.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            bulid: {
                src: 'dist/built.js',
                dest: 'dist/built.min.js'
            }
        },
       watch: {
          css: {
            files: 'css/*.css',
            options: {
              livereload: true,
            }
          }
        },
         express: {
            all: {
                options: {
                    port:10086,
                    hostname: 'localhost',
                    bases:['.'],
                    livereload: true
                }
            }
        }
       
    });



    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('server',['express','watch']);
}