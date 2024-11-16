const EventEmitter = require("events")

const myFirstEmitter = new EventEmitter()

//what to do when greet emit called
myFirstEmitter.on("greet",(name)=>{
    console.log("hello" ,name)
})

//now call the listener with emit method
myFirstEmitter.emit("greet","sayantan")

