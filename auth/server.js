require("dotenv").config()
const express = require("express")
const authRoutes = require("./routes/auth-routes")
const homeRoutes = require("./routes/home-routes")
const adminRoutes = require("./routes/admin-routes")



const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/home", homeRoutes)
app.use("/api/admin", adminRoutes)

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}.`);
})

const connectToDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://avex:avex7708@cluster0.q9dfv.mongodb.net/")
        console.error("MongoDB successfully connected.")
    } catch(error){
        console.error("MongoDB connection failed!")
        process.exit(1)

        // UDh4n9Lmp1gC5zdA
    }
}
connectToDB()