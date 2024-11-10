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

async function consume() {
    try {
        const response = await promisev
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }

}


consume()