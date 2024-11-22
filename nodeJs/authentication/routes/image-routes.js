const express = require("express");
const adminMiddleware = require("../middleware/admin-middleware")
const authMiddleware = require("../middleware/auth-middleware")
const uploadMiddleware = require("../middleware/upload-middleware")
const {uploadImageController} = require("../controller/image-controller")

const router = express.Router();


router.post("/upload",authMiddleware,adminMiddleware,uploadMiddleware.single('image'),uploadImageController)

module.exports = router;