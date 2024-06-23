// Modules
const { body } = require("express-validator");

// Validation Array
const validationArray = [
  body("name").isString().withMessage("Invalid name"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isString().withMessage("Inappropriate password"),
];

module.exports = validationArray;
