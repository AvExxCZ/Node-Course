const express = require("express")
const { getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook } = require("../controllers/book-controller.js")

// create express router
const router = express.Router()

// all the routes that are related to books only
router.get("/get", getAllBooks)

router.get("/get/:id", getSingleBookById)

router.post("/add", addNewBook)

router.put("/update/:id", updateBook)

router.delete("/delete/:id", deleteBook)

// export the router
module.exports = router