const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task is completed");
        resolve()
    }, 1000)
})


//do the wprk after promise is resolved 
//if we dont use resolve the code inside PromiseOne.then() will not
PromiseOne.then(() => {
    console.log("hello your promise is resolved")
})


const PromiseTwo = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        console.log("async task is completed");
        resolve({ name: "sayantan", age: 34 })//this value pass into the then
    } else {
        reject("something went wrong")//this value to the catch
    }
})

// you get the value from the then parameter

PromiseTwo
    .then((e) => {
        console.log(e)
        return e.name
    })
    .then((e) => (console.log(e)))
    .catch((e) => {
        console.log(e)
    })
    .finally(()=>{
        console.log("the promise is resolved finally")
    })

