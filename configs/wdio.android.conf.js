const baseConfig = require("./wdio.conf");
const capabilities = require("./capabilities");

exports.config = {
  ...baseConfig.config,

  specs: [
    "../tests/android/**/*.test.js"
  ],

  capabilities: [
    capabilities.android
  ]
};
