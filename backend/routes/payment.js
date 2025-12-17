const express = require("express");
const router = express.Router();

const { capturePayment, verifySignature } = require("../controllers/payment");
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/authMiddleware");

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifySignature", verifySignature);

module.exports = router;
