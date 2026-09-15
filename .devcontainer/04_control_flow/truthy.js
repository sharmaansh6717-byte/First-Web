//falsy values 
// false
// 0
// -0
// 0n
// "", '', ``
// null
// undefined
// NaN 

//truthy values
// true
// {}
// []
// 1
// -1
// "0"
// "false"
// function() {}
// new Date()
// /regex/
// Infinity
// -Infinity

// Example of truthy and falsy values in control flow
const values = [false, 0, -0, 0n, "", '', ``, null, undefined, NaN, true, {}, [], 1, -1, "0", "false", function() {}, new Date(), /regex/, Infinity, -Infinity];

// const userEmail = [];
// if(userEmail.length === 0){
//     console.log("User email is empty");
// }

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){ //here the object.keys() method returns an array of the object's own enumerable property names, and we check if the length of that array is 0 to determine if the object is empty.
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

//Nulish Coalescing Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is useful for providing default values for potentially null or undefined variables.

let val1;

val1 = 5 ?? 10; // returns 5 because val1 is not null or undefined
console.log(val1); // Output: 5

val1 = null ?? 10; // returns 10 because val1 is null
console.log(val1); // Output: 10

val1 = undefined ?? 10; // returns 10 because val1 is undefined
console.log(val1); // Output: 10

val1 = 0 ?? 10; // returns 0 because val1 is not null or undefined
console.log(val1); // Output: 0

val1 = "" ?? "default"; // returns "" because val1 is not null or undefined
console.log(val1); // Output: ""

val1 = null ?? 10 ?? 20;
console.log(val1); // Output: 10

//Terniary Operator (?:) is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is a shorthand way of writing an if-else statement.

condition ? expressionIfTrue : expressionIfFalse;

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes    

