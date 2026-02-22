const express = require("express");
const router = express.Router();

// Import controllers
// course controllers import
const {
  createCourse,
  showAllCourses,
  getCourseDetails,
} = require("../controllers/course");

// categories controllers import
const {
  showAllCategory,
  createCategory,
  categoryPageDetails,
} = require("../controllers/category");
//section controller import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/section");
//subsection controllers import
const { createSubSection } = require("../controllers/subSection");
//ratingAnd review controller import
const {
  createRating,
  getAverageRating,
  getAllRatingAndReview,
} = require("../controllers/ratingAndReview");

//importing middleware
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/authMiddleware");
const { addCourseToStudent } = require("../controllers/addCoursetoStudent");

// ***********************************************************************
//                      Course Routes
//********************************************************************** */

//course can only be created by isInstructor

router.post("/createCourse", auth, isInstructor, createCourse);

//add aSection to course

router.post("/createSection", auth, isInstructor, createSection);
// update a section

router.post("/updateSection", auth, isInstructor, updateSection);
// delete a section

router.delete("/deleteSection", auth, isInstructor, deleteSection);

//updateSubSection
// router.post("/updateSubSection", auth, isInstructor, updateSubSection);

// //deleteSubSection
// router.delete("/deleteSubSection", auth, isInstructor, deleteSubSection);
//add a subsection
router.post("/createSubSection", auth, isInstructor, createSubSection);
//
//get All registered course

router.get("/getAllCourses", showAllCourses);
router.get("/getCourseDetails", getCourseDetails);

//
//***************************
//rating and review routes
//****************************
router.post("/createRating", auth, isStudent, createRating);
router.post("/getAverageRating", getAverageRating);
router.post("/getAllRatingAndReview", getAllRatingAndReview);

//  *************
///  category routes
// //*********** *
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

// addCourse to student

router.post("/addCourseToStudent", auth, isStudent, addCourseToStudent);

module.exports = router;
