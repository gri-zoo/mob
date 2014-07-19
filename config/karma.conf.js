module.exports = function(config){
  config.set({
    basePath : '../www',
    files : [
      'bwr/angular/angular.js',
      'bwr/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'test/unit/**/*.js'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers : ['Chrome', 'Firefox'],
    plugins : ['karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],
    junitReporter : {
      outputFile: 'out/unit.xml',
      suite: 'unit'
    },
    logLevel: 'DEBUG'
  });
}