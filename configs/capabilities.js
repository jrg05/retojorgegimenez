module.exports = {
  android: {
    platformName: "Android",

    "appium:automationName": "UiAutomator2",

    "appium:deviceName": "Android Emulator",

    "appium:platformVersion": "14.0",

    "appium:appPackage":
      "com.saucelabs.mydemoapp.android",

    "appium:appActivity":
      "com.saucelabs.mydemoapp.android.view.activities.MainActivity",

    "appium:noReset": true,

    "appium:newCommandTimeout": 240
  },

  ios: {
    platformName: "iOS",

    "appium:automationName": "XCUITest",

    "appium:deviceName": "iPhone Simulator",

    "appium:platformVersion": "17.0",

    "appium:bundleId":
      "com.saucelabs.mydemoapp.ios",

    "appium:noReset": true,

    "appium:newCommandTimeout": 240
  }
};
