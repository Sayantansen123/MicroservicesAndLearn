const express = require("express")
const app = express()

const myMiddleware = (req,res,next)=>{
    console.log("This will run in every request you made")//this will run on every request you made
    next()

}

app.use(myMiddleware)


app.get("/",(req,res)=>{
    res.send("home")
})

app.listen(3000,()=>{
    console.log("server listening at port 3000")
})
