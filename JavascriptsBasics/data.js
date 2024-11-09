let mydate = new Date()
console.log(mydate.toString())//Sat Nov 09 2024 22:33:04 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()) //Sat Nov 09 2024
console.log(mydate.toLocaleString()) //11/9/2024, 10:33:04 PM

let mydate1 = new Date(2023, 0 ,23)
console.log(mydate1.toDateString())

let time = Math.floor(Date.now())
console.log(time)