const Section = require("../models/Section");
const Course = require("../models//Course");

// creating course section
exports.createSection = async (req, res) => {
  try {
    //fetch the data
    const { sectionName, courseId } = req.body;
    // validate the data
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //create section
    const newSection = await Section.create({ sectionName });
    /// update the course with section object id
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      { $push: { courseContent: newSection._id } },
      { new: true }
    );
    //TODO use populate to replace section and subsection to updateCourseDetails

    // return response
    return res.status(200).json({
      success: true,
      message: "Course section created and Course is  updatae",
      course: updatedCourseDetails,
    });
  } catch (error) {
    console.log("error while creating section", error);
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "section not created successfully",
    });
  }
};

//update a section
exports.updateSection = async (req, res) => {
  try {
    // data
    const { sectionName, sectionId } = req.body;
    //data validation
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing properties",
      });
    }
    //update data
    const updataSection = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );

    return res.status(200).json({
      message: "section successfully updated",
      success: true,
    });
  } catch (error) {
    console.log("error in section update", error);
    res.status(500).json({
      success: false,
      message: "section not update successfully",
    });
  }
};

//delete section

exports.deleteSection = async (req, res) => {
  try {
    // get Id -- assuming the we are the sending id from in params
    const { sectionId } = req.params;
    //     const { sectionId, courseId } = req.params;

    if (!sectionId) {
      return res.status(400).json({
        success: false,
        message: "section id missing",
      });
    }
    await Section.findByIdAndDelete(sectionId);
    //     industory level
    //      await Course.findByIdAndUpdate(courseId, {
    //       $pull: { courseContent: sectionId },
    //     });

    return res.status(200).json({
      success: true,
      message: "section is deleted successfully",
    });
  } catch (error) {
    console.log("section is not deleted");
  }
};
