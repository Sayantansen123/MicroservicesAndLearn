const promisev = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ message: "message is send" })
        } else {
            reject("error is happened")
        }
    }, 3000)
})

//using async we fetch the data which will come in later
async function consume() {
    try {
        const response = await promisev
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }

}

setTimeout(async()=>{
 const hi = await consume()
 console.log(hi)
},5000)
