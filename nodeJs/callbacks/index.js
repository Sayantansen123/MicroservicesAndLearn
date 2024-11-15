const fs = require("fs")


//callback example
function person(name,callbackfn){
    console.log(`${name}`);
    callbackfn()  
}

function address(){
    console.log("Kolkata");
}

person("sayantan",address)

//passing callback in fs

fs.readFile(`${__dirname}\\input.txt`,'utf8',(err,data)=>{
    if(err){
        console.error("Error reading file",err)
        return
    }

   console.log(data)
    
})