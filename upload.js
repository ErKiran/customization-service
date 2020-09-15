const formidable = require("formidable");
const fs = require("fs");
const { validateFile } = require("./utils/validateFile");
const { unzip } = require("./utils/unzip");

async function uploadFile(req, res) {
  try {
    let filePath;
    const dir = "./themes";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const form = new formidable.IncomingForm({});
    form.parse(req);
    form.on("fileBegin", (name, file) => {
      const isValidFormat = validateFile(file);
      if (!isValidFormat.success) {
        return res.json(isValidFormat);
      }
      file.path = __dirname + "/themes/" + file.name;
      filePath = file.path;
      const dest = __dirname + "/theme/" + isValidFormat.fileName;

      form.on("file", () => {
        unzip(filePath, dest);
      });

      return res.json({
        path: filePath,
      });
    });

    form.on("error", (msg) => {
      try {
        if (msg) {
          return res.json({
            success: false,
            msg: "Can't upload the file",
          });
        }
      } catch (err) {
        throw new Error(`Error while uploading file ${err}`);
      }
    });
  } catch (err) {
    throw new Error(`Error while uploading file ${err}`);
  }
}

module.exports = {
  uploadFile,
};
