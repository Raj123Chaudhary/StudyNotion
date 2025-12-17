const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//create course
exports.createCourse = async (req, res) => {
  try {
    //fetch data
    // const file = req.files.file;
    // console.log("fIle is : ", file);

    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      tag,
      category,
      status,
    } = req.body;
    const thumbnailImage = req?.files?.thumbnailImage;
    console.log("req.body:", req.body);
    console.log("thumbnail", thumbnailImage);
    //validation for files
    if (!req.files || !req.files.thumbnailImage) {
      return res.status(400).json({
        success: false,
        message: "Thumbnail image is required",
      });
    }
    //validation
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !thumbnailImage ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required like course name ",
      });
    }
    // check for instructor

    const userId = req.user?.id;
    console.log("userId:", userId);
    const instructorDetails = await User.findById(userId);

    console.log("instuctorDetail: ", instructorDetails);

    //validation

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "instructor detail not found",
      });
    }
    //check given tag is valid
    const categoryDetails = await Category.findById(category);
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "category detail not found",
      });
    }
    //upload Image to cloudinary
    const thumbnail = await uploadImageToCloudinary(
      thumbnailImage,
      process.env.FOLDER_NAME
    );

    // create an entry for  new course
    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn,
      price,
      tag,
      category,
      thumbnail: thumbnail.secure_url,
      status: status || "Draft",
    });
    // Add this course user Schema of instructor
    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      }
    );
    //update the tag schema (home work)
    await Category.findByIdAndUpdate(
      { _id: categoryDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Course create successfully",
      success: true,
      data: newCourse,
    });
  } catch (error) {
    console.log("error while creating the course", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "course not created ",
    });
  }
};

//getAll courses
exports.showAllCourses = async (req, res) => {
  try {
    //
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        courseDescription: true,
        ratingAndReview: true,
        studentsEnrolled: true,
        thumbnail: true,
        instructor: true,
      }
    )
      .populate("instructor")
      .exec();
    return res.status(200).json({
      success: true,
      message: "data for all course fetch successfully",
      data: allCourses,
    });
  } catch (error) {
    console.log("error to show course", error);
    return res.status(500).json({
      success: false,
      message: "cannot fetdch course data",
      error: error.message,
    });
  }
};
//getCourseDetails

exports.getCourseDetails = async (req, res) => {
  try {
    //get courseId
    const { courseId } = req.body;
    //find courseDetails
    const courseDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetail",
        },
      })
      .populate("category")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .populate("ratingAndReview")
      .exec();
    //validation
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: `could not find the course with ${courseId}`,
      });
    }
    return res.status(200).json({
      success: true,
      data: courseDetails,
      messate: "course details fetched successfully",
    });
  } catch (error) {
    console.log("error while getingCourseDetail", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      message: "getCourseDetails no find successfully",
    });
  }
};
