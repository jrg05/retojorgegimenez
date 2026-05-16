const { config } = require('../wdio.conf');

config.capabilities = [{
  platformName: 'iOS',
  'appium:deviceName': 'iPhone 15',
  'appium:automationName': 'XCUITest'
}];

exports.config = config;