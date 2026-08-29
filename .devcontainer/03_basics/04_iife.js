//Immediately Invoked Funcion Expressions (IIFE) -> to execute the function immediately so that it not get polluted by the global variables

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai() //....this can be written like below also for the immediate execution


(function chai(){
    console.log("DB CONNECTED");
    //NAMED IIFE
})(); //first () is for defining function and the second () is for the execution and the semi colon is necessary to end the IIFE so that we can use IIFE further in other functions for immediate calling or prevention of global scope polluting 

( () => {
    console.log("DB CONNECTED TWO");
    
})(); //arrow function can also be used with iife but make sure that the previous execution is terminated using ; semi colon

((name) => {
    console.log(`DB CONNECTED TWO${name}`);
    
})(" ansh")