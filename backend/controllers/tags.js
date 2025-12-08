const Tag = require("../models/Tag");
//create tag ka handler

exports.createTag = async (req,res)=>{
     try {
          const {name , description} = req.body;
          //validation
          if(!name || !description){

               return res.status(400).json({
                    success:false,
                    message:"all fieds are required"
               })
          };
          //create entry in db
          const tagDetails = await Tag.create({
               name,description
          })
          console.log("tagDetails ", tagDetails))
          return res.status(200).json({
               success:true,
               message:"tag create successfully"
          })
     } catch (error) {
          console.log("error while creating tag",error);
          return res.status(500).
          
     }
}