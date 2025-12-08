const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth

exports.auth = async (req, res, next) => {
  try {
    //extract token
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");
    //
    // if token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token is missing",
      });
    }
    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      // jo payload me data dalenge vo aa jayega for futhur verification
      req.user = decode;
      //I verified the token, now I will store the user info inside req so other functions can use it.”
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "something went wrong while validating auth",
    });
  }
};
// isStudent

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(403).json({
        success: false,
        message: "This route is only for students",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while checking student role",
      error: error.message, // optional (use only in development)
    });
  }
};

//isInstructor

exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(403).json({
        success: false,
        message: "This route is only for Instructor",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while checking Instructor role",
      error: error.message, // optional (use only in development)
    });
  }
};
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "This route is only for Admin",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while checking Admin role",
      error: error.message, // optional (use only in development)
    });
  }
};
