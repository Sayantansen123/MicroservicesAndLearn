const express = require("express")

//REST ==> Represntational State Transfer

const app = express()

app.use(express.json())//helps to parse json file

const books = [
    {
        "id": 1,
        "name": "book1",
    },
    {
        "id": 2,
        "name": "book2"
    },
    {
        "id": 3,
        "name": "book3"
    }
]

app.get("/", (req, res) => {
  res.send("welcome to our book store")
})

//get all books
app.get("/get", (req, res) => {
   res.send(books)
})

//get a single book
app.get("/get/:id",(req,res)=>{
    const bookId = req.params.id;
    const singleBook = books.find(product => product.id.toString() === bookId.toString())
    if(singleBook){
        res.status(200).send(singleBook)
    }else{
        res.status(404).send("cant find the book")
    }
})

app.listen(3000, () => {
    console.log("server started on port http://localhost:3000")
})