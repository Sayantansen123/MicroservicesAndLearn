//to solve callback hell we use promises 

function divideAfterSomeTime (num1,num2,time){
    return new Promise((resolve,reject)=>{
        if(num2 == 0){
            setTimeout(()=> (reject("cant divide by 0")),time) //give the error statement after some time
            
        }else{
            setTimeout(()=> (resolve(num1/num2)),time) //give the value after some time
           
        }
    })
}

divideAfterSomeTime(10,2,3000)
.then((val)=>console.log(val))//val is the value we are getting from resolve
.catch(error =>console.log(error,"error")) //error is the error message getting from the reject