const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const email = req.body.email;
    console.log("email: ", email);
    // check user for this email email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "your email is not register with us",
      });
    }
    // genrate token
    const token = crypto.randomUUID();
    //update user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );
    // create url
    const url = `http://localhost:3000/update-password/${token}`;

    //send mail containing the url
    await mailSender(
      email,
      "password reset link",
      `password reset link ${url}`
    );
    return res.status(200).json({
      success: true,
      message:
        "email sent successfully plz visit email and  rest your password",
    });
  } catch (error) {
    console.log("error while sent reset password link", error);
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "reset email not sent successfully",
    });
  }
};

//resetPassword
exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        messsage: "password not matching for reset passs",
      });
    }
    //get userDetails
    const userDetails = await User.findOne({ token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "token is invalid for reset password",
      });
    }
    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expired plz regenerate your pass",
      });
    }
    //hashed the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // password update
    await User.findOneAndUpdate(
      { token: token },
      {
        password: hashedPassword,
        token: null,
        resetPasswordExpires: null,
      },
      { new: true }
    );
    //return res
    return res.status(200).json({
      success: true,
      message: "Password reset success full",
    });
  } catch (error) {
    console.log("error occurred while reset the password", error);
    return res.status(500).json({
      success: false,
      message: "Password not reset successfully",
    });
  }
};
