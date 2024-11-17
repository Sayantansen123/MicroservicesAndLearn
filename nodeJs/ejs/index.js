const express = require("express")
const path = require("path")

const app = express()

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

const products = [
    {"id":1,
    "message":"product1",
    },
    {"id":2,
    "message":"product2"
    },
    {"id":3,
        "message":"product3"
        }
]

app.get("/",(req,res)=>{
    res.render('home',{title : 'Home', products:products})
})

app.get("/about",(req,res)=>{
    res.render('about',{title : 'About page'})
})

app.listen(3000,()=>{
    console.log("server started on port http://localhost:3000")
})