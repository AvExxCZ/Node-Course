const mongoose = require("mongoose")

const connectToDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://avex:UDh4n9Lmp1gC5zdA@cluster0.q9dfv.mongodb.net/")
        console.error("MongoDB successfully connected.")
    } catch(error){
        console.error("MongoDB connection failed!")
        process.exit(1)
    }
}

module.exports = connectToDB