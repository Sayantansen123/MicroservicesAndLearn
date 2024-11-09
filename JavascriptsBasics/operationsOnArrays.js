const arr = [1,2,3,4,5,6]

//to print all values of array can be done with a string also
console.log("print all the value of array:")
for(const num of arr){
    console.log(num)
}

//using forEach loop
console.log("print all the value of array using for Each:")
arr.forEach((val,index,arr)=>{
    console.log(val," ",index," ",arr)
})

//filter method
console.log("filtering out the value more than 4:")
const newArr = arr.filter((val) =>{
     return val > 4 //if u dont return it will return an empty array 
})
console.log(newArr)

//map method
console.log("adding 10 with every digit:")
const newArr1 = arr.map((val) =>{
    return val + 10 //if u dont return it will return an empty array 
})
console.log(newArr1)

//reduce 
console.log("reduce in into sum")
const newArr2 = arr.reduce((acc,cur)=>(acc + cur),0);
console.log(newArr2)