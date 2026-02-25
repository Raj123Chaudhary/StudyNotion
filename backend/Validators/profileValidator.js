const { body } = require("express-validator");

exports.updateProfileValidator = [
  body("firstName")
    .optional()
    .isString()
    .isLength({ min: 2, max: 30 })
    .withMessage("First name must be 2 - 30 characters"),

  body("lastName")
    .optional()
    .isString()
    .isLength({ min: 2, max: 30 })
    .withMessage("Last name must be 2–30 characters"),

  body("contactNumber")
    .optional()
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Invalid Indian phone number"),

  body("gender")
    .optional()
    .isIn(["male", "female", "other"])
    .withMessage("Invalid gender value"),

  body("about")
    .optional()
    .isLength({ max: 300 })
    .withMessage("About section max 300 characters"),

  body("dateOfBirth")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format")
    .custom((value) => {
      if (new Date(value) >= new Date()) {
        throw new Error("Date of birth must be in the past");
      }
      return true;
    }),
];
