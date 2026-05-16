exports.config = {
  runner: "local",

  port: 4723,

  specs: ["../tests/ios/**/*.js"],

  capabilities: [{
    platformName: "iOS",
    "appium:deviceName": "iPhone Simulator",
    "appium:automationName": "XCUITest",
    "appium:bundleId": "com.saucelabs.mydemoapp.ios",
    "appium:noReset": true
  }],

  framework: "mocha",
  services: ["appium"],
  mochaOpts: {
    timeout: 60000
  }
};
