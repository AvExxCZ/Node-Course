const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"],
        trim: true,
        maxLenght: [100, "Book title can not be more than 100 characters"]
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "Publication year is requierd"],
        min: [1000, "Year must be altest 1000"],
        max: [new Date().getFullYear(), "Year cannot be in the future"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)