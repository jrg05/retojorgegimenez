const fs = require("fs");

async function screenshot(driver, name) {
  const img = await driver.takeScreenshot();
  fs.writeFileSync(`evidence/${name}.png`, img, "base64");
}

module.exports = { screenshot };
