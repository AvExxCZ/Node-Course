const cloudinary = require("../config/cloudinary.js")

const uploadToCloudinary = async (filePath) => {
    try {

        const result = await cloudinary.uploader.upload(filePath)

        return {
            url: result.secure_url,
            publicId: result.public_id
        }
        
    } catch (error) {
        console.error("Error while uploadnig to cloudinary", error)
        throw new Error("Error while uploadnig to cloudinary")
    }
}

module.exports = {
    uploadToCloudinary
}