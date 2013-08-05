// Karma configuration
// Generated on Tue May 28 2013 21:55:01 GMT+0800 (CST)

basePath = './';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  '../lib/*.js',
  '../js/*.js',
  '../units/*Spec.js',
  {
      pattern: '../fixtures/json/*.json',
      watched: true,
      included: false,
      served: true
  },
  {
      pattern: '../fixtures/html/*.html',
      watched: true,
      included: false,
      served: true
  }
];

preprocessors = {
  '../js/*.js': 'coverage'
};

reporters = ['progress', 'dots', 'junit', 'coverage'];
junitReporter = {
    outputFile: '/home/zack/.jenkins/jobs/JS/workspace/js-results.xml'
}

coverageReporter = {
    type : 'html',
    dir : '../coverage/',
    file : 'coverage.html'
}

logLevel = LOG_INFO;
autoWatch = false;
browsers = ['PhantomJS'];
singleRun = true;

proxies = {
    '/': 'http://localhost:3000/'
}
