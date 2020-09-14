const Themes = require("../models/themes");
const { createThemeValidator } = require("../validations/themes");

async function createTheme(req, res) {
  try {
    const { errors, isValid } = createThemeValidator(req.body);
    if(!isValid){
      return res.status(400).json(errors);
    }
    const newTheme = await new Themes(req.body).save();
    return res.json(newTheme);
  } catch (err) {
    res.json(err);
    throw new Error(`Unable to create theme ${err}`);
  }
}

module.exports = {
  createTheme,
};
