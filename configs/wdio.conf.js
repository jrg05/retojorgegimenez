exports.config = {
  runner: "local",

  hostname: "127.0.0.1",

  port: 4723,

  path: "/",

  logLevel: "info",

  framework: "mocha",

  reporters: ["spec"],

  waitforTimeout: 20000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  },

  services: ["appium"],

  before: async function () {
    global.$ = $;
    global.$$ = $$;
  }
};
