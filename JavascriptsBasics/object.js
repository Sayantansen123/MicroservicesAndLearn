const tinderuser = {}

tinderuser.id = 1;
tinderuser.names = "sayantan";
tinderuser.age = 16;

console.log(tinderuser)

const {id,names,age} = tinderuser;

console.log(id)
console.log(names)
console.log(age)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = Object.assign({0:"a"},obj1,obj2,obj3)
console.log(obj4)