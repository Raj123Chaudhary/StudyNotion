const Category = require("../models/Category");

//create tag ka handler

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    //validation
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "all fieds are required",
      });
    }
    //create entry in db
    const categoryDetails = await Category.create({
      name,
      description,
    });
    // console.log("categoryDetails ", categoryDetails);
    return res.status(200).json({
      success: true,
      categoryDetails: categoryDetails,
      message: "category create successfully",
    });
  } catch (error) {
    console.log("error while creating tag", error);
    return res.status(500).json({
      success: false,
      message: "error whilecreateing Category",
    });
  }
};

//get all tag

exports.showAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find(
      {},
      { name: true, description: true }
    );
    return res.status(200).json({
      allCategory,
      success: false,
      messaage: "all category show succesfuly",
    });
  } catch (error) {
    console.log("erro to show all tag", error);
    return res.status(500).json({
      success: false,
      message: "category not get",
    });
  }
};
//category page details

exports.categoryPageDetails = async (req, res) => {
  try {
    //get categoruId
    const { categoryId } = req.body;

    // cosnt courses for specified categoryId
    const selectedCategory = await Category.findById(categoryId)
      .populate("courses")
      .exec();

    //validation
    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }

    //get causes for different category
    const differentCategory = await Category.find({ _id: { $ne: categoryId } })
      .populate("courses")
      .exec();
    if (!differentCategory) {
      return res.status(404).json({
        success: false,
        message: "different category not found",
      });
    }
    //get top selling courses
    return res.status(200).json({
      success: true,
      message: "category page details get successfully",
      data: {
        selectedCategory,
        differentCategory,
      },
    });
  } catch (error) {
    console.log("error to get category page details", error);
    return res.status(500).json({
      success: false,
      message: "category page details not found",
    });
  }
};
