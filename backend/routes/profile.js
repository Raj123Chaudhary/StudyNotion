const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authMiddleware");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword");
const {
  deleteAccount,
  updateProfile,
  getUserDetails,
} = require("../controllers/profile");

router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getUserDetails);

// new get enrooled course
// router.get("/getEnrolledCourses", auth, getEnrolledCourses);
// router.put("/updateDisplayPicture", auth, updateDisplayPicture);

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

module.exports = router;
