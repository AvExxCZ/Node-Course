const Book = require("../models/book.js")

const getAllBooks = async(req, res) => {
    try{
        const allBooks = await Book.find()
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                message: "List of books fetched successfully...",
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No books found in collection!"
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong! Please try again..."
        })
    }
}

const getSingleBookById = async(req, res) => {
    try{
        const bookDetailsByID = await Book.findById(req.params.id)
        if(!bookDetailsByID){
            return res.status(404).json({
                success: false,
                message: "Something went wrong! Please try again..."
            })
        }
        res.status(200).json({
            success: true,
            data: bookDetailsByID
        })
    } catch(error){
        console.error(error)
        res.status(404).json({
            success: false,
            message: "Book with the current ID is not found! Please try with a different ID..."
        })
    }
}

const addNewBook = async(req, res) => {
    try{
        const newelyCreatedBook = await Book.create(req.body)
        if(newelyCreatedBook){
            res.status(201).json({
                success: true,
                message: "Book successfully added...",
                data: newelyCreatedBook
            })
        }
    } catch(error){
        console.error(error)
    }
}

const updateBook = async(req, res) => {
    try{
        const updatedBookFormData = req.body
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            updatedBookFormData,
            { new: true }
        )
        if(!updatedBook){
            res.status(404).json({
                success: false,
                message: "Something went wrong! Please try again..."
            })
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully...",
            data: updatedBook
        })
    } catch(error){
        console.error(error)
        res.status(404).json({
            success: false,
            message: "Book with the current ID is not found! Please try with a different ID..."
        })
    }
}

const deleteBook = async(req, res) => {
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if(!deleteBook){
            res.status(404).json({
                success: false,
                message: "Something went wrong! Please try again..."
            })
        }
        res.status(200).json({
            success: true,
            data: deletedBook
        })
    } catch(error){
        console.error(error)
        res.status(404).json({
            success: false,
            message: "Book with the current ID is not found! Please try with a different ID..."
        })
    }
}

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
}