const express = require("express")
const authMiddleware = require("../middleware/auth-middleware")
const adminMiddleware = require("../middleware/admin-middleware")

const router = express.Router()

// protect route with auth and admin middleware
router.get("/welcome", authMiddleware, adminMiddleware, (req, res) => {
    res.json({
        message: "welcome to the admin page"
    })
})

module.exports = router