const Profile = require("../models/Profile");
const User = require("../models/User");
const Course = require("../models/Course");
const CourseProgress = require("../models/CourseProgress");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
// update profile
exports.updateProfile = async (req, res) => {
  try {
    //  fetch data
    const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;
    //get userId
    const userId = req.user.id;
    //validation

    if (!contactNumber || !gender || !userId) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    //find profile
    const userDetails = await User.findById(userId);
    const profileId = userDetails.additionalDetail;
    const profileDetails = await Profile.findByIdAndUpdate(
      profileId,
      {
        dateOfBirth,
        about,
        contactNumber,
        gender,
      },
      { new: true },
    );
    //update profile

    // await profileDetails.save();

    // return res
    return res.status(200).json({
      success: true,
      message: "profile updated successfully",
      updateProfile: profileDetails,
    });
  } catch (error) {
    console.log("error occured while updating profile ", error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Profile not updated successfully",
    });
  }
};

//change profile Image

exports.updateProfileImage = async (req, res) => {
  try {
    console.log("i am in updateprofileImage");
    const image = req.files.imageFile;
    console.log("image:", image);
    // check validataion
    if (!image) {
      return res
        .status(400)
        .json({ message: "Select Image First", success: false });
    }
    //upload image to the cloudinary
    const uploadImage = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME,
    );
    console.log("uploade Image : ", uploadImage);
  } catch (error) {
    console.log("Error in update profile image : ", error);
    return res.status(500).json({ message: "Error in updating profile image" });
  }
};

//delete Accout
exports.deleteAccount = async (req, res) => {
  //if user is student
  // delete the user student and related data
  //if User is instructor delete  its related data
  try {
    // TODO : un enroll user form all enrolled courses
    //get id using id get user
    const id = req.user.id;
    const userDetails = await User.findById(id);
    //validation
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "user not found then how i can delete you",
      });
    }

    if (userDetails.additionalDetail) {
      await Profile.findByIdAndDelete(userDetails.additionalDetail);
    }
    await CourseProgress.deleteMany({
      _id: { $in: userDetails.courseProgress },
    });

    await Course.updateMany(
      { studentsEnrolled: id },
      { $pull: { studentsEnrolled: id } },
      { multi: true },
    );

    //delete user
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error deleting account:", error);
    return res.status(500).json({
      success: false,
      message: "Account not deleted",
    });
  }
};

// get User additionalDetail
exports.getUserDetails = async (req, res) => {
  try {
    //get all user data
    const id = req.user.id;
    // validate
    console.log(id);
    const userDetails = await User.findById(id)
      .populate("additionalDetail")
      .exec();
    return res.status(200).json({
      userDetails: userDetails,
      sucess: true,
      message: "user data fetch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "user details not found",
      error: error.message,
    });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    // get user
    const user = await User.findById(userId)
      .populate({ path: "courses" })
      .exec();
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    // get user enrolled courses
    const enrolledCourses = user.courses;
    return res.status(200).json({
      message: "successfully fetch enrolled courses",
      success: true,
      enrolledCourses: enrolledCourses,
    });
  } catch (error) {
    console.log("Error in fetching getEnrolledCourses :", error);
    res.status(500).json({
      message: "Error in fetching getEnrolledCourses",
      success: false,
    });
  }
};
