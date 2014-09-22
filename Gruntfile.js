module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: [
        //      'lib/jquery.min.js',
        //       'lib/jquery.fullPage.min.js',
        //       'lib/owl.carousel.min.js',
        //       'lib/custom.js',
        //       'lib/weixin.js'
        // ],
        src: [
              'scripts/jquery.min.js',
              'scripts/browserSwipe.js',
               'scripts/touchswipe.js',
              'scripts/main.js',
              'scripts/weixin.js'
             
        ],
        dest: 'dist/build.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);


};