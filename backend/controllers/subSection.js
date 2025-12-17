const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();
// create subsection

exports.createSubSection = async (req, res) => {
  try {
    // fetch data from req.body
    const { sectionId, title, timeDuration, description } = req.body;
    // fetch the file/video
    const video = req.files.videoFile;
    console.log("video:", video);
    //validation
    if (!sectionId || !title || !description || !timeDuration || !video) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    // upload video to cloudinary for secureUrl
    const uploadVideo = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    console.log("uploadVideo:", uploadVideo);
    //create a subsection
    const subSectionDetails = await SubSection.create({
      title: title,
      description,
      timeDuration: timeDuration,
      videoUrl: uploadVideo.secure_url,
    });
    // update section with this subsection object id
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      {
        $push: { subSection: subSectionDetails._id },
      },
      { new: true }
    );
    // return response
    return res.status(200).json({
      success: true,
      message: "sub section is created successfully",
    });
  } catch (error) {
    console.log("error while creating subsection", error);
    return res.status(500).json({
      success: false,
      message: "subsection is not created",
      error: error.message,
    });
  }
};
