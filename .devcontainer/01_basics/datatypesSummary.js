//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// === use for comparing symbol because it is unique and immutable

// const bigNumber = 3456543576654356754n



// Reference (Non primitive))

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack and Heap Memory in JavaScript

// Stack Memory => Primitive Datatypes
// Heap Memory => Non-Primitive Datatypes

let myName = "Ansh" // stored in stack memory

let myanotherName = myName // stored in stack memory

let userOne = {
    email: "sharmasjfk@gmail.com",    // stored in heap memoryƒ•
    name: "user"
}

let userTwo = userOne // stored in heap memory  the userTwo is pointing to the same reference of userOne hence if i change the value of userTwo it will also change the value of userOne because they are pointing to the same reference in heap memory.

userTwo.email = "anshsharma@gmail.com"

console.log(userOne.email); // output => anshsharma@gmail.com