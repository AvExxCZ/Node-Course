require("dotenv").config()
const express = require("express")
const connectToDB = require("./database/db.js")
const bookRoutes = require("./routes/book-routes.js")

const app = express()
const PORT = process.env.PORT || 3000

// connect to our database
connectToDB()

// middleware -> express.json()
app.use(express.json())

// routers
app.use("/api/books", bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})