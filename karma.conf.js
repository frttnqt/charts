module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-remap-istanbul'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage'),
      require('karma-bail-fast'),
    ],
    client: {
      clearContext: false,
      jasmine: {
        random: false,
      },
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reporters: [{ type: 'html' }, { type: 'lcovonly' }, { type: 'text-summary' }],
      fixWebpackSourcePaths: true,
      check: {
        emitWarning: false,
        global: {
          statements: 97,
          lines: 97,
          branches: 97,
          functions: 97,
        },
        each: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0,
        },
      },
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov',
      },
    },
    reporters: []
      .concat(config.angularCli && config.angularCli.codeCoverage ? ['coverage'] : [])
      .concat(['progress']),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--disable-gpu', '--no-sandbox', '--js-flags=--max-old-space-size=4096'],
      },
    },
    singleRun: false,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 20000,
    browserNoActivityTimeout: 240000,
    captureTimeout: 960000,
  });
};
