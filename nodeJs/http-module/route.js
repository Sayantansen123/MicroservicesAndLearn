const http = require("http")

const server = http.createServer((req,res)=>{
    const request = req.url
    if(request === "/"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Home")
    }else if(request === "/products"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("products")
    }else{
        res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("This page cant be found")
    }


})

const port = 3000

server.listen(port,()=>{
    console.log("server listening to port:", port)
})