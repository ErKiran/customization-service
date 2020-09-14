const Themes = require("../models/themes");
const { createThemeValidator } = require("../validations/themes");

async function createTheme(req, res) {
  try {
    const { errors, isValid } = createThemeValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const { price, currency } = req.body;
    let b = {};

    const pricing = {};
    if (price !== undefined && price !== "" && price !== 0) {
      pricing.price = price;
      pricing.isFree = false;
      pricing.currency = currency;
    }
    b = { ...req.body, pricing };
    const newTheme = await new Themes(b).save();
    return res.json(newTheme);
  } catch (err) {
    res.json(err);
    throw new Error(`Unable to create theme ${err}`);
  }
}

async function getAllAdminThemes(req, res) {
  try {
    const themes = await Themes.find({ author: "Admin" }).lean();
    return res.json(themes);
  } catch (err) {
    throw new Error(`Can't get All free themes ${err}`);
  }
}

module.exports = {
  createTheme,
  getAllAdminThemes,
};
