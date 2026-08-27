// function addTwoNumbers(num1 , num2) //paramters passed
// {
//     console.log(num1 + num2);
// }

// // addTwoNumbers(4,5) //arguements passed
// const result = addTwoNumbers(4,5) 
// console.log("Result : " , result) // Result : undefined -> bcuz console.log doesnt hold any datatype

function addTwoNumbers(num1 , num2)
{
    // let result = num1 + num2
    // return result
    return num1 + num2  
    console.log("ansh") //this will not execute as we have used return the function at line 13 only ..
}

const result = addTwoNumbers(4,5)
//console.log("Result : " , result) //Result : 9

// function loginUserMessage(username)
// {
//     return `${username} just logged in..`
// }
// console.log(loginUserMessage("Ansh")) //if here no value passed then it will return undefined just logged in.. 

// function loginUserMessage(username)
// {
//     // if(username === undefined){
//     //     console.log("Please enter the username");
        
//     // }
//     //the above if condition can also written as below
//     if(!username)
//     {
//         console.log("Please enter the username");
//         return
//     }
//     else{
//          return `${username} just logged in..`

//     }
   
// }
// //console.log(loginUserMessage());

// console.log(loginUserMessage("Ansh"))

function calculateCarPrice(...num1) //used REST operator which combines the data into array
{
    return num1

}
// console.log(calculateCarPrice(200,300,4000)); //[ 200, 300, 4000 ]

const user = {
    username : "ansh",
    price : 999
}
function handlingObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `)
}
// handlingObject(user)
handlingObject({
    username : "ansh",   //-> it can be passed like this also
    price : "99"
})

const myNewArr = [100,200,300]

function returnSecondVal(getArray)
{
    return getArray[1]
}
console.log(returnSecondVal(myNewArr));
