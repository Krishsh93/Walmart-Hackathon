// Modules
const { body } = require("express-validator");

// Validation Array
const validateUser = [
  body("name").isString().withMessage("Invalid name"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
];

const validateLogin = [
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").isString().withMessage("Wrong password"),
];

module.exports = { validateUser, validateLogin };
