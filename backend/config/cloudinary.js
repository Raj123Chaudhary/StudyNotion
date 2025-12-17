const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    console.log("cloudinay connected");
  } catch (error) {
    console.log(error);
    console.log("Erro coming to connecting cloudinary");
  }
};
module.exports = { cloudinary, cloudinaryConnect };
