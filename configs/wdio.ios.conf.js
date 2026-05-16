const baseConfig = require("./wdio.conf");
const capabilities = require("./capabilities");

exports.config = {
  ...baseConfig.config,

  specs: [
    "../tests/ios/**/*.test.js"
  ],

  capabilities: [
    capabilities.ios
  ]
};
