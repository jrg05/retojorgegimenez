exports.config = {
  runner: "local",

  port: 4723,

  specs: ["../tests/android/**/*.js"],

  capabilities: [{
    platformName: "Android",
    "appium:deviceName": "Android Emulator",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.saucelabs.mydemoapp.android",
    "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.MainActivity",
    "appium:noReset": true
  }],

  framework: "mocha",

  services: ["appium"],

  mochaOpts: {
    timeout: 60000
  }
};
