const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const log = (message) => {
  console.log(`[LOG]: ${message}`);
};

module.exports = {
  wait,
  log
};
