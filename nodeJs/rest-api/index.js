const express = require("express")


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

app.get("/get", (req, res) => {
   res.send(books)
})

app.listen(3000, () => {
    console.log("server started on port http://localhost:3000")
})