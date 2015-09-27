module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    'meta': {
      'jsFilesForTesting': [
        'app/bower_components/jquery/dist/jquery.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-sanitize/angular-sanitize.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/underscore/underscore.js',
        'app/bower_components/underscore/underscore.js',
        'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'app/src/**/*.js'
          ],
        }
      }
    },
    'jshint': {
    'beforeconcat': ['app/src/**/*.js']
    }
  });

  grunt.registerTask('test', ['karma:development']);

};
