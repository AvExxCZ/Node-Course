const mongoose = require("mongoose")

const connectToDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://avex:avex2653@cluster0.cefnu.mongodb.net/")
        console.log("mongodb is connected successfully !")
    }
    catch(e){
        console.error("Mongodb connection failed", e)
        process.exit(1)
    }
}

module.exports = connectToDB