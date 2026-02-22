const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");
const crypto = require("crypto");

//capture the payment and initiate the razorpay

exports.capturePayment = async (req, res) => {
  //get courseId and userId
  const { course_id } = req.body;
  const user_id = req.user.id;
  //valid course_id
  if (!course_id) {
    return res.json({
      message: "Plz provide valid course id",
      success: false,
    });
  }
  //valid Course details
  let course;
  try {
    course = await Course.findById(course_id);
    if (!course) {
      return res.json({
        success: false,
        message: "could not find course details",
      });
    }
    // check user already pay for this course
    const uid = mongoose.Types.ObjectId(user_id);
    if (course.studentsEnrolled.includes(uid)) {
      return res.status(200).json({
        success: false,
        message: "student already enrolled",
      });
    }
    //user already pay for course id or not
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "error while capturing course",
    });
  }
  //create order
  const amount = course.price;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: `receipt_${Date.now()}`, // unique receipt id
    notes: {
      courseId: course_id,
      userId: user_id,
    },
  };
  try {
    //initiate the payment using razorpay
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);
    return res.status(200).json({
      success: true,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      thumbnail: course.thumbnail,
      orderId: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    console.log("error while payment", error);
    return res.json({
      success: false,
      message: "Could not initiate payment",
    });
  }
};
exports.verifySignature = async (req, res) => {
  const webHookSecret = "12345678";
  //signature given by user id
  const signature = req.headers["x-razorpay-signature"];

  const shasum = crypto.createHmac("sha256", webHookSecret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  if (signature === digest) {
    console.log("payment is authorized");
    const { courseId, userId } = req.body.payload.entity.notes;
    const enrolledCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: { studentsEnrolled: userId },
      },
      { new: true },
    );
    console.log("enrolledCourse:", enrolledCourse);
    const enrolledStudent = await User.findByIdAndUpdate(
      userId,
      {
        $push: { courses: courseId },
      },
      { new: true },
    );
    console.log("enrolledStudent:", enrolledStudent);
    //send mail for successfull by course
    const emailResponse = await mailSender(
      enrolledStudent.email,
      "Congratulation new course",
      "congo bro",
    );
    console.log(emailResponse);
    return res.status(200).json({
      success: true,
      message: "siganture verified successfully",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "signature not verified",
    });
  }
};
