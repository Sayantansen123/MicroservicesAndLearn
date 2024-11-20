const Image = require("../models/Image");
const {uploadToCloudinary} = require("../helpers/cloudinaryHelper")

const uploadImage = async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"File is not there"
            })
        }

        //upload to cloudinary
        const {url , publicId} = await uploadToCloudinary(req.file.path)

        //store the image url and public id along with the uploaded user id in database
        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId,
          });
      
          await newlyUploadedImage.save();

          res.status(201).json({
            success: true,
            message: "Imaged uploaded successfully",
            image: newlyUploadedImage,
          });

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {
    uploadImage
  };