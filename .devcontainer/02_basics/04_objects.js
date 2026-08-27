// const tinderUser = new Object() //Singleton Object 
const tinderUser = {} //Non-Singleton Object 

tinderUser.id = "a123@bc"
tinderUser.name = "rahul"
tinderUser.isloggedIn = false

// console.log(tinderUser); //{ id: 'a123@bc', name: 'rahul', isloggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    name : {
        fullname : {
            firstname : "ansh" ,
            lastname : "sharma"
        }
    }
}

//console.log(regularUser.name.fullname); //{ firstname: 'ansh', lastname: 'sharma' }
//node .devcontainer/02_basics/04_objects.js

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}

// const obj4 = Object.assign({} , obj1 , obj2 , obj3); //{} -> work as target and further obj1 2 3 act as a source which assigned into the target  
//console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//OR

const obj4 = {...obj1 , ...obj2 , ...obj3} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } -> spread method ...more useful

//console.log(obj4)

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    }
    
    
]

users[1].email

console.log(tinderUser) ; //{ id: 'a123@bc', name: 'rahul', isloggedIn: false }
console.log(Object.keys(tinderUser)); //  [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser)); //[ 'a123@bc', 'rahul', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', 'a123@bc' ], [ 'name', 'rahul' ], [ 'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedIn')); //true



//DE-STRUCTURING OF OBJECTS 
const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "ansh"
}

//course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor); //ansh

const{courseInstructor : instructor} = course //renamed the key in the object 

console.log(instructor); //ansh

//JSON and API intro 

//JavaScript Object Notation, and it is a lightweight, text-based format used to store and transport structured data.

//How JSON WorksKey-Value Pairs:
// Data is organized into name and value pairs (e.g., "name": "Alice").Objects and Arrays: Objects use curly braces {} to hold multiple pairs, while arrays use square brackets [] for ordered lists of items.Supported Data Types: It supports strings, numbers, booleans (true/false), arrays, objects, and null.

//Common Uses :
// APIs and Web Apps: Servers send data to a web browser or app in JSON format so the interface can display it dynamically.Configuration Files: Programs use .json files to save settings and app configurations.Language Independent: Although derived from JavaScript syntax, almost all modern programming languages (like Python, Java, and C#) can easily read and write JSON.

//An API is a messenger that lets software programs talk to each other, while JSON is the specific language or format used to write down the message being sent.To use an everyday analogy: the API is the mail carrier delivering a package, and JSON is the cardboard box containing the structured items inside.

//[ Application A ]  --- (Sends Request via API) --->  [ Application B ]
// [ Application A ]  <--- (Returns Data in JSON) ----  [ Application B ]

// {
//     name : "ansh",
//     price : "999",          --> JSON format ..API fulfill the request in this format ..object format 
//     coursename : "js in hindi "
// }

// [
//     {},
//     {},    --> API also get the request in the array format also having the objects inside it 
//     {} 
// ]

//to understand the data from API in JSON format we can use JSON formatter online ..to undrestand it 