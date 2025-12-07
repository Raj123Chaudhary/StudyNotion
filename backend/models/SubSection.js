const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeDuration: {
    type: String,
  },
});
module.exports = mongoose.model("SubSection", subSectionSchema);
