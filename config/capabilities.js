module.exports = {
  android: {
    platformName: "Android",
    "appium:deviceName": "Android Emulator",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.saucelabs.mydemoapp.android",
    "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.MainActivity",
    "appium:noReset": true
  },

  ios: {
    platformName: "iOS",
    "appium:deviceName": "iPhone Simulator",
    "appium:automationName": "XCUITest",
    "appium:bundleId": "com.saucelabs.mydemoapp.ios",
    "appium:noReset": true
  }
};
