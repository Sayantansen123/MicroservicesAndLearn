//root folder
const firstModule = require("./first-moule")

console.log(firstModule.add(10,20))

try {
    console.log("Trying to devide with 0")
    console.log(firstModule.divide(0,0))
} catch (error) {
    console.log("error") //catching the error and giving the messsage
}