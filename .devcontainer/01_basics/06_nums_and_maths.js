const score = 100;
console.log(score); // 100

const balance = new Number(400);
console.log(balance); // [Number: 400]  Number Object

//since the Nuumber has less properties to apply on it so we can convert it to string and then apply the methods on it
console.log(balance.toString()); // 400  converts the Number Object to string
console.log(balance.toString().length); // 3  length of the string  
console.log(balance.toFixed(2)); // 400.00  converts the Number Object to string with fixed number of decimal places

const otherNumber = 28.9996
console.log(otherNumber.toPrecision(3)); // 29.0  converts the Number Object to string with specified number of significant digits
console.log(otherNumber.toExponential(2)); // 2.90e+1  converts the Number Object to string in exponential notation with specified number of decimal places

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000  converts the Number Object to string with locale specific formatting
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000  converts the Number Object to string with locale specific formatting for India



// +++++++++++++++++++++++++++++++   MATHS   ++++++++++++++++++++++++++++++++
console.log(Math); // Object [Math] { ... }  Math is a built-in object that has properties and methods for mathematical constants and functions
console.log(Math.PI);
console.log(Math.PI.toFixed(3)); // 3.142  converts the Number Object to string with fixed number of decimal places
//here you will not get all the properties and methods of Math object so you can go to google->inspect->console->type Math and press enter to see all the properties and methods of Math object

console.log(Math.round(4.7)); // 5  rounds the number to the nearest integer
console.log(Math.floor(4.7)); // 4  rounds the number down to the nearest integer
console.log(Math.ceil(4.7)); // 5  rounds the number up to the nearest integer
console.log(Math.trunc(4.7)); // 4  removes the decimal part of the number
console.log(Math.sign(-4.7)); // -1  returns the sign of the number
console.log(Math.pow(2, 3)); // 8  returns the value of x to the power of y
console.log(Math.sqrt(16)); // 4  returns the square root of the number
console.log(Math.abs(-4.7)); // 4.7  returns the absolute value of the number
console.log(Math.min(1, 2, 3, 4, 5)); // 1  returns the smallest number
console.log(Math.max(1, 2, 3, 4, 5)); // 5  returns the largest number
console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // returns a random integer between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer between 1 and 10
console.log(Math.floor(Math.random() * 100) + 1); // returns a random integer between 1 and 100
console.log(Math.floor(Math.random() * 1000) + 1); // returns a random integer between 1 and 1000


// suppose you want to generate a random number between 50 and 100 then you can use the following formula
const min = 50;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // returns a random integer between 50 and 100