require('dotenv').config({ path: 'configs/.env' });

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
  
    updateJob: false,
    specs: [
      '../test/specs/**/*.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID,
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    reporters: [
      "spec",
      ['allure', {
        outputDir: 'allure-results',
    }]
  ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };