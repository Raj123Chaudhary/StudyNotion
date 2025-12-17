const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
require("dotenv").config();
// sending otp
exports.sendOTP = async (req, res) => {
  //add to email validataion
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
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);
    //check unique otp or not
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    // create a object to save in db
    const otpPayload = new OTP({ email, otp });
    console.log("otpPayload: ", otpPayload);
    const response = await otpPayload.save();
    console.log("response: ", response);
    return res.status(200).json({
      success: true,
      message: "otp saved successfully",
      otp: otp,
    });
  } catch (error) {
    console.log("Error Occurred , While sending the OTP", error);
    return res.status(500).json({
      success: false,
      message: "Error in saving otp",
    });
  }
};

// sign up
exports.signUp = async (req, res) => {
  //fetch the data
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    //validate the data
    if (
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !email ||
      !contactNumber ||
      !otp
    ) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    console.log("otp:", otp);
    // 2 password match kro pass confirm pass
    // check user already exist or not
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "pass  and confirm pass not match",
      });
    }

    // find most recent otp stored for the user
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }
    //find most recent otp stored for the user
    //because otp expire hone se pehle kahi otp doucement save ho skte h
    const recentOtp = await OTP.findOne({ email })
      .sort({ createAt: -1 })
      .limit(1);
    console.log("recentOtp: ", recentOtp.otp);
    // validate otp
    if (!recentOtp) {
      //OTP not found
      return res.status(400).json({
        success: false,
        message: "otp not found",
      });
    } else if (otp != recentOtp.otp) {
      console.log("OTP RECENTOTP", otp, recentOtp.otp);
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // hash passward
    const hashedPassword = await bcrypt.hash(password, 10);
    // create entry in DB
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      contactNumber,
      additionalDetail: profileDetails._id,
      accountType,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log("error occured while signUp : ", error);
    return res.status(500).json({
      success: false,
      message: "error occurred while signup",
    });
  }
};

//login
exports.login = async (req, res) => {
  try {
    //fetch the data
    const { email, password } = req.body;
    //vaidation of data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required Plz fill carefully ",
      });
    }
    //check user exist or not
    const userPresent = await User.findOne({ email }).populate(
      "additionalDetail"
    );
    if (!userPresent) {
      return res.status(409).json({
        success: false,
        message: "User not SignUP , Sign up first",
      });
    }
    //matched the password

    const hashedPassword = userPresent.password;
    // console.log("hashed pass: ", hashedPassword);
    // console.log("normal passward: ", password);
    const result = await bcrypt.compare(password, hashedPassword);
    if (result) {
      // generate jsonwebtoken
      const userPayload = {
        email: userPresent.email,
        id: userPresent._id,
        accountType: userPresent.accountType,
      };
      const token = jwt.sign(userPayload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      userPresent.token = token;
      userPresent.password = password;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: false,
      };
      // console.log("tokenLogin:", token);
      //create cookie and send response
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        userPresent,
        message: "Logged IN",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incoorect",
      });
    }
  } catch (error) {
    console.log("error while login", error);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};
//change password

exports.changePassword = async (req, res) => {
  try {
    //get data from req.body
    //get old data , newPassword , confirm new password
    // validation
    //update password in DB
    // send mail -password updated
    // return response
  } catch (error) {}
};
