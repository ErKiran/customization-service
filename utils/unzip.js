const fs = require("fs");
const unzipper = require("unzipper");

function unzip(source,destination) {
  try {
    fs.createReadStream(source).pipe(
      unzipper.Extract({ path: destination })
    );
  } catch (err) {
    throw new Error(`Can't unzip file ${err}`);
  }
}

module.exports = {unzip}