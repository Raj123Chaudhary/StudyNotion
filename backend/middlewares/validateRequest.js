const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  console.log("i am valitor middlewares");
  const errors = validationResult(req);
  console.log("error in validator :", errors.error);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};
