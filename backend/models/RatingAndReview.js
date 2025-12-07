const mongoose = require("mongoose");
const { useReducer } = require("react");

const ratingAndReviewSchema = new mongoose.Schema({
  rating: {
    type: number,
  },
  review: {
    type: string,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);
