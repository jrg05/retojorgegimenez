exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};