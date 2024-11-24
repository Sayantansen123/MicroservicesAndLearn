require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/book-routes")


const app = express()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDb connected")
}).catch((e) => console.log(e))

//middleware 

app.use(express.json())
app.use("/products",productRouter)

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})