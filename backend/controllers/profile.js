const Profile = require("../models/Profile");
const User = require("../models/User");
const Course = require("../models/Course");
const CourseProgress = require("../models/CourseProgress");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// update profile
exports.updateProfile = async (req, res) => {
  try {
    //  fetch data
    const { firstName, lastName, dateOfBirth, about, contactNumber, gender } =
      req.body;
    //get userId
    const userId = req.user.id;
    if (!userId) {
      return res
        .status(404)
        .json({ message: "user not found", success: false });
    }

    //find profile
    const userDetails = await User.findById(userId);
    const profileId = userDetails.additionalDetail;
    // check  and update user firstName and LastName
    if (firstName || lastName) {
      await User.findByIdAndUpdate(
        userId,
        {
          ...(firstName && { firstName: firstName }),
          ...(lastName && { lastName: lastName }),
        },
        { new: true },
      );
    }
    // update profile data or User (additionDetails)
    const updateProfile = {
      ...(dateOfBirth && { dateOfBirth: dateOfBirth }),
      ...(gender && { gender: gender }),
      ...(about && { about: about }),
      ...(contactNumber && { contactNumber: contactNumber }),
    };
    // update profile or userAdditional details
    await Profile.findByIdAndUpdate(profileId, updateProfile, { new: true });
    const updatedUser = await User.findById(userId)
      .populate({ path: "additionalDetail" })
      .exec();

    return res.status(200).json({
      success: true,
      message: "User details updated successfully",
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.log("error occured while updating profile ", error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "User details not updated",
    });
  }
};

//change profile Image

exports.updateProfileImage = async (req, res) => {
  try {
    const userId = req?.user?.id;
    if (!userId) {
      return res
        .status(404)
        .json({ message: "user not found", success: false });
    }
    // console.log("i am in updateprofileImage");
    const image = req?.files?.imageFile;
    console.log("image:", image);
    // check validataion
    if (!image) {
      return res
        .status(400)
        .json({ message: "Select Image First", success: false });
    }
    //check only jpeg and png upload in cloudinary
    // const { fileTypeFromBuffer } = await import("file-type");
    // const type = await fileTypeFromBuffer(image.data);
    // console.log("type:", type);

    // if (!type || !["image/png", "image/jpeg"].includes(type.mimetype)) {
    //   return res.status(400).json({
    //     message: "Only PNG and JPEG images are allowed",
    //     success: false,
    //   });
    // }
    // 1. MIME type
    if (!["image/png", "image/jpeg"].includes(image.mimetype)) {
      return res.status(400).json({ message: "Invalid image type" });
    }

    // 2. File size
    // if (image.size > 2 * 1024 * 1024) {
    //   return res.status(400).json({ message: "Max size 2MB" });
    // }
    //upload image to the cloudinary
    const uploadImage = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME,
    );
    // console.log("uploade Image : ", uploadImage);
    await User.findByIdAndUpdate(
      userId,
      { image: uploadImage?.secure_url },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Profile Image Update successfully", success: true });
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
