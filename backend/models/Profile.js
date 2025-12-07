const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  dateOfBirth: {
    type: String,
  },
  contactNumber: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("Profile", profileSchema);
