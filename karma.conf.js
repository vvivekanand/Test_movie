// Karma configuration
// Generated on Tue Jan 11 2022 12:21:18 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine-jquery','jasmine','sinon'],


    // list of files / patterns to load in the browser
    files: [
      'lib/jquery.min.js',
      'lib/underscore-min.js',
      'lib/backbone-min.js',
      'lib/handlebars.min.js',
      'src/template/**/*.html',
      'spec/helpers/*.js',
      'src/MovieModel.js',
      'src/MovieCollection.js',
      'src/addmovieview.js',
      'spec/**/*.js',
    ],


    // list of files / patterns to exclude
    exclude: [
      'Enter empty string to move to the next question.'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: { '**/*.html':['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
  })
}
