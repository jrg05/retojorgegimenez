const { config } = require('../wdio.conf');

config.capabilities = [{
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:automationName': 'UiAutomator2'
}];

exports.config = config;