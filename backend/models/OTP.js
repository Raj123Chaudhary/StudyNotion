const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});
//mail send()
async function sendVerificationEmail(email, otp) {
  try {
    const response = await mailSender(
      email,
      "Verfication email send by study notion",
      otp
    );
    console.log("successfully send verification code");
  } catch (error) {
    console.log("error occured : while sendind verification code :", error);
  }
}
OTPSchema.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});
module.exports = mongoose.model("OTP", OTPSchema);
