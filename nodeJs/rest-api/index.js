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

//post a new book
app.post("/add",(req,res)=>{
    const newBook = {
        id: books.length + 1,
        title : `books ${books.length + 1}`
    }
    books.push(newBook)
    res.status(200).json({
        data : newBook,
        message : "Book is added"
    })
})

//update a new book
app.put("/update/:id",(req,res)=>{
    const findCurrentBook = books.find((bookItem) => bookItem.id.toString() === req.params.id.toString())
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title;
        res.status(200).send({
            message : `book with id ${req.params.id} updated`,
            book : books
        })
    }else{
        res.status(404).send({
            message : "book not found"
        })
    }
})

//delete a book
app.delete("/delete/:id",(req,res)=>{
    const findCurrentBook = books.findIndex((bookItem) => bookItem.id.toString() === req.params.id.toString())
    if(findCurrentBook !== -1){
        const deletedBook = books.splice(findCurrentBook,1)
        res.status(200).json({
            data : "Book deleted succesfully",
            book: books
        })
    }else{
        res.status(404).send("some error occured")
    }
})

app.listen(3000, () => {
    console.log("server started on port http://localhost:3000")
})