//There are 3 types of variable let const and var

// var is globally scoped so it will hold its value outside the scope also
//let is block scoped its value will be within the block

var a = 10
let b = 19
const s = true

if(s){
    a = 12
    let b = 12
    console.log("in the block scope value of the var",a)
    console.log("in the block scope value of the let",b)
}

console.log("out side the block scope value of the var",a)//value of a is changed
console.log("out side the block scope value of the let",b)//value of b not changed
