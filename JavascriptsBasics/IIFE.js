//IIFE means imediately invoked funtion 
function hello() {
    console.log("hello");
};

hello();

(() => {
    console.log("Db is connected")  //it calls immediately when the program runs no need to run it
})(); //important

((name) => {
    console.log(`Db is connected ${name}`); //it calls immediately when the program runs
} )("sayatan") //there is the value of params u want to pass



