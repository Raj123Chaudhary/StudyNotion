const express = require("express");
const router = express.Router();
const { auth, isStudent } = require("../middlewares/authMiddleware");
const { updateProfileValidator } = require("../Validators/profileValidator");

const validRequest = require("../middlewares/validateRequest");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword");
const {
  deleteAccount,
  updateProfile,
  getUserDetails,
  getEnrolledCourses,
  updateProfileImage,
} = require("../controllers/profile");

router.delete("/deleteProfile", auth, deleteAccount);
router.patch(
  "/updateProfile",
  auth,
  updateProfileValidator,
  validRequest,
  updateProfile,
);
router.put("/updateProfileImage", auth, updateProfileImage);
router.get("/getUserDetails", auth, getUserDetails);

// new get enrooled course
router.get("/getEnrolledCourses", auth, isStudent, getEnrolledCourses);
// router.put("/updateDisplayPicture", auth, updateDisplayPicture);

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

module.exports = router;
