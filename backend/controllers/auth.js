const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");

exports.sendOTP = async (req, res) => {
  try {
    //fetch the email from req.body
    const { email } = req.body;
    //check email already exist of not
    const userPresent = await User.findOne({ email });
    if (userPresent) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }
    //genrate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);
    //check unique otp or not
    const result = await OTP.findOne({ otp: otp });
  } catch (error) {
    console.log("Error Occurred , While sending the OTP", error);
  }
};

//otp send

// sign up

//login
