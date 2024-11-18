const express = require("express")
const {loginUser,registerUser} = require("../controller/auth-controller")
const router = express.Router()

//all routes
router.post("/login",loginUser)
router.post("/register",registerUser)

module.exports = router

