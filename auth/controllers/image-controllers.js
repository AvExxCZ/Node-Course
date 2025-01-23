const Image = require("../models/image")

const uploadImage = async (req, res) => {
    try {
        
        // check if file is missing in req object
        if(!req.file){
            return res.json({
                success: false
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again."
        })
    }
}