const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((error) => {
      console.log("database connection failed");
      console.log(error);
      process.exit(1);
    });
};
module.exports = dbConnect;
