//Singleton
//Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


//Object literals

const mySym = Symbol("key1") //Symbol declaration


const JsUser = {
    "full name": "ansh sharma",
    name: "ansh",
    age: 20,
    // mySum : "newkey1", // this syntax for symbol key access is wrong 
     [mySym] : "newkey1", //correct way to access symbol
    email: "ansh@google.com",
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.name); // ansh
// console.log(JsUser["name"]); // ansh...to access the value of the object this method is prefered because like in line 7 of the code we can't access the full name using dot(.) so we have to use this method
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); 

// JsUser.email = "ansh@AI.com" //here the value of "email" is changed 
// //Object.freeze(JsUser); // it will prevent the further changes in the object 
// JsUser.email = "ansh34a@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);

//Functions

JsUser.greeting = function(){
    console.log("HELLO JS USER");
}
    

console.log(JsUser.greeting());  //HELLO JS USER

//if we say like this 
console.log(JsUser.greeting); //HELLO JS USER
                              //undefined
                              //[Function (anonymous)]...here it only got the reference of the function not its data 

 JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this["full name"]}`); //string interpolation to access the keys inside the object
}
console.log(JsUser.greetingTwo());