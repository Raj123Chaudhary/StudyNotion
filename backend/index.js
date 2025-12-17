const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/course");
const paymentRoutes = require("./routes/payment");
require("dotenv").config();

const dbConnect = require("./config/db");
const cookieParse = require("cookie-parser");

const cors = require("cors");

const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");

const PORT = process.env.PORT || 4000;
dbConnect();

// middleware

// app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParse());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    parseNested: true,
  })
);
//cloudinary connection

cloudinaryConnect();
//userRoutes

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

//default routs

app.get("/", (req, res) => {
  // res.send("app run");
  return res.json({
    success: true,
    message: "your server is running",
  });
});

// activate the server

app.listen(PORT, () => {
  console.log(`app is runnig http://localhost:${PORT}`);
});
