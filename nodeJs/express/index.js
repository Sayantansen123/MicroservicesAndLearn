const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/products",(req,res)=>{
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
    res.json(products)
})


//dynamic url
app.get("/products/:id",(req,res)=>{

    const productsId = req.params.id;
    const products = [
        {"id":"1",
        "message":"product1",
        },
        {"id":"2",
        "message":"product2"
        },
        {"id":"3",
            "message":"product3"
            }
    ]

    const requiredProducts = products.find(product => product.id === productsId)
    if(requiredProducts){
        res.send(requiredProducts)
    }else{
        res.status(404).send("Product not found")
    }
})

app.listen(3000,()=>{
    console.log("server listening at port 3000")
})
