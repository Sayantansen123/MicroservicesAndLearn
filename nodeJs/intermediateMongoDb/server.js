require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")


const app = express()

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDb connected")
}).catch((e) => console.log(e))

//middleware 

app.use(express.json())

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})