// Karma configuration
// Generated on Tue May 28 2013 21:55:01 GMT+0800 (CST)

basePath = './';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  '../js/*.js',
  '../units/*Spec.js'
];

reporters = ['progress', 'dots', 'junit'];
junitReporter = {
    outputFile: '../results/test-results.xml'
}

logLevel = LOG_INFO;
autoWatch = false;
browsers = ['PhantomJS'];
singleRun = true;
