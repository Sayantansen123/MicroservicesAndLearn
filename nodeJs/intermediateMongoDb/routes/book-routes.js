const express = require("express")
const {  insertSampleProducts, getProductsStats, getProductAnalytics } = require("../controllers/product-controller")

const router = express.Router()

router.post("/add", insertSampleProducts)
router.get("/allproducts",getProductsStats)
router.get("/analytics",getProductAnalytics)

module.exports = router;