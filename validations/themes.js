const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = {
  createThemeValidator: function createThemeValidator(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.author = !isEmpty(data.author) ? data.author : "";
    data.themePath = !isEmpty(data.themePath) ? data.themePath : "";
    data.mobileScreenshot = !isEmpty(data.mobileScreenshot) ? data.mobileScreenshot : "";
    data.laptopScreenshot = !isEmpty(data.laptopScreenshot) ? data.laptopScreenshot : "";

    if (Validator.isEmpty(data.name)) {
      errors.name = "Name field is required";
    }
    if (Validator.isEmpty(data.author)) {
      errors.author = "Author field is required";
    }

    if(Validator.isEmpty(data.themePath)){
        errors.themePath = "themePath field is required";
    }

    if(Validator.isEmpty(data.mobileScreenshot)){
        errors.mobileScreenshot = "mobileScreenshot field is required";
    }

    if(Validator.isEmpty(data.laptopScreenshot)){
        errors.laptopScreenshot = "laptopScreenshot field is required";
    }

    if (!Validator.isLength(data.name, { min: 4, max: 30 })) {
        errors.name = 'Name must be at least 4 characters';
    }

    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
};
