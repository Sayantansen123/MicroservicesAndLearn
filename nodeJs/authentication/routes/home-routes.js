const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
    res.json({ message: "welcome to homepage" })
})

module.exports = router