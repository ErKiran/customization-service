function validateFile(file) {
  try {
    const allowdedFileExtensions = ["application/zip"];
    const fileExtension = file.name.split(".").pop();
    const fileName = file.name.split(".")[0].split(" ").join("_");
    if (file.name.includes("/")) {
      return {
        success: false,
        msg: "Abnormal File Name",
      };
    }
    if (file.name.length > 255) {
      return {
        success: false,
        msg: "Abnormal File Length",
      };
    }

    if (allowdedFileExtensions.includes(file.type)) {
      return {
        success: true,
        fileExtension,
        fileName,
      };
    }

    return {
      success: false,
      msg: "Abnormal File",
    };
  } catch (err) {
    throw new Error(`Can't validate file ${err}`);
  }
}

module.exports = { validateFile };
