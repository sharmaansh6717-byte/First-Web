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
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderUser)); //[ 'a123@bc', 'rahul', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', 'a123@bc' ], [ 'name', 'rahul' ], [ 'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedIn')); //true