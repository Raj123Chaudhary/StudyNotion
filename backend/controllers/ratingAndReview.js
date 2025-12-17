const RatingAndReview = require("../models/RatingAndReview.js");
const Course = require("../models/Course");
const mongoose = require("mongoose");

//create  rating
exports.createRating = async (req, res) => {
  try {
    //get userId
    const userId = req.user.id;

    //fetch the data
    const { rating, review, courseId } = req.body;
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });
    // check user is enrolled or not
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "course deatils not found for this user",
      });
    }
    //check if user already reviewd the course
    const alreadyReviewed = await RatingAndReview.find({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course is reviwed by the user",
      });
    }
    // create     rating and review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    //update the course with this ratingAndReview
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: { ratingAndReview: ratingReview._id },
      },
      { new: true }
    );
    console.log("updatedCourseDetail: ", updatedCourse);
    // return the response
    return res.status(200).json({
      success: true,
      message: "rating and review created successsfully",
      data: ratingReview,
    });
  } catch (error) {
    console.log("error while creating review and rating", error);
    res.status(500).json({
      success: false,
      message: "error while creating review and rating",
    });
  }
};

//get averageRating
exports.getAverageRating = async (req, res) => {
  try {
    //get courseid
    const courseId = req.body.courseId;
    //calculate avg rating
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          //because course id is string
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        //all entry rap in single group
        $group: { _id: null, averageRating: { $avg: "$rating" } },
      },
    ]);
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
        message: "rating done",
      });
    }
    // if no ratinf/revie
    return res.status(200).json({
      success: true,
      averageRating: 0,
      message: "average rating is o no rating given till now",
    });
  } catch (error) {
    console.log("not getting reting", error);
    return res.status(200).json({
      success: false,
      message: "not getting avg rating",
    });
  }
};

//get allRating and review

exports.getAllRatingAndReview = async (req, res) => {
  try {
    const allReviews = (await RatingAndReview.find({}))
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();
    return res.status(200).json({
      success: true,
      message: "geting all review anf rating",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "not geting all review anf rating",
    });
  }
};
