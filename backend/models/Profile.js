const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    dateOfBirth: {
      type: Date,
      validate: {
        validator: function (value) {
          return value < new Date(); // DOB cannot be in future
        },
        message: "Date of birth must be in the past",
      },
    },

    contactNumber: {
      type: Number,
    },

    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "Gender must be male, female, or other",
      },
    },

    about: {
      type: String,
      trim: true,
      maxlength: [300, "About section cannot exceed 300 characters"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Profile", profileSchema);
