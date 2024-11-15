const fs = require("fs")
//so this is callback hell .. to achive our desired output we need to go through many nested callback so it is less readable
fs.readFile(`${__dirname}\\input.txt`,'utf8',(err,data)=>{
    if(err){
        console.error("Error reading file",err)
        return
    }

   const modifydata = data.toUpperCase();
   fs.writeFile(`${__dirname}\\input.txt`,modifydata,(err)=>{
    if(err){
        console.error("Error writing file",err)
        return
    }
    console.log("data written to new file")

    fs.readFile(`${__dirname}\\input.txt`,'utf8',(err,data)=>{
        if(err){
            console.error("Error reading file",err)
            return
        }
        console.log(data)
    })
   })
    
})