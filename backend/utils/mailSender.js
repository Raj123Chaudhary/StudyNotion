const nodeMailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.MAIL_HOST,
      secure: true,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    const info = await transporter.sendMail({
      to: `${email}`,
      from: "Study notion - Raj chaudhary",
      html: `${body}`,
      subject: `${title}`,
    });
    return info;
  } catch (error) {
    console.log(error);
    console.log("Error: while sending the male");
  }
};
module.exports = mailSender;
