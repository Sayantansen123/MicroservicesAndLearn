const obj = {
    id : 1,
    name : "sayantan",
    message : function(){
        console.log(`${this.name} hello`)
        console.log(this)//print the whole object so this is like a refernce
    }
    
    
}

obj.message()

function hello () {
    console.log(this)
}

hello()// gives a whole info about the function