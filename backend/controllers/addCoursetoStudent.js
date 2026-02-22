const Course = require("../models/Course");
const mongoose = require("mongoose");
const User = require("../models/User");
exports.addCourseToStudent = async (req, res) => {
  try {
    // get user id and courid
    const userId = req.user.id;
    const { courseId } = req.body;
    //check user is logged in or not
    if (!userId) {
      return res.status(401).json({ message: "user is not logged in" });
    }
    //check course id is present or  not
    if (!courseId) {
      return res
        .status(404)
        .json({ message: "Course id is not found", success: false });
    }
    // check course is present or not
    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ message: "Course not found", success: false });
    }
    // prevent duplicates enrollment of courses
    const alreadyEnrolled = await User.findOne({
      _id: userId,
      courses: courseId,
    });
    if (alreadyEnrolled) {
      return res
        .status(400)
        .json({ message: "course alreadyEnrolled", success: false });
    }
    //     if(user.courses.includes(courseId)) javascipt way to prevent duplicates

    // add course to the user
    await User.findByIdAndUpdate(
      userId,
      { $addToSet: { courses: courseId } },
      { new: true },
    );
    await Course.findByIdAndUpdate(
      courseId,
      { $addToSet: { studentsEnrolled: userId } },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Course add successfully", success: true });
  } catch (error) {
    console.log("Error in addCourseToStudent", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
