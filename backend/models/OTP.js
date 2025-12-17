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
// OTPSchema.pre("save", async function () {
//   await sendVerificationEmail(this.email, this.otp);
//   next();
// });

//chat gpt
// this.isNow means this document is create first time
OTPSchema.pre("save", async function () {
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
});
module.exports = mongoose.model("OTP", OTPSchema);
