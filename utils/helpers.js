const fs = require("fs");

async function takeScreenshot(name) {

  const image = await browser.takeScreenshot();

  fs.writeFileSync(
    `evidence/screenshots/${name}.png`,
    image,
    "base64"
  );
}

module.exports = {
  takeScreenshot
};
