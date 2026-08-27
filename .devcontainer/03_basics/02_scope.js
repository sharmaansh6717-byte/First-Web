// let a = 30
// const b = 40


// if(true)
// {
// var c = 50
// }
// console.log(a);//30
// console.log(b);//40
// console.log(c);//50  -> but here is the problem since c is in the block scope then it can not be accessed since var initializes globally ....{} -> scope
let a = 300
if(true)
{
    let a = 10
    console.log("INNER :" , a);
}
console.log(a);
//INNER : 10 -> block scope ...the scope of inner a is inside the if only 
// 300 -> global scoped a

//browser -> inspect -> console -> here global scope works differently than the node environment of coding in vs

function one(){

    const username = "ansh"
    function two()
    {
        const website = "youtube"
        console.log(username);
    }
 //   console.log(website); //here it can not be accessed bcuz the parent function can not access the keys inside child function but the child function can access the keys of parent function ...remember the icecream analogy
    two()
}
one()

if(true)
{
    const username = "ansh "
    if(username === "ansh ")
    {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); -> here it will show error as it cannot be accessed
}
// console.log(username);here it will again show error as it cannot be accessed bcuz username is inside the block scope of if


// +++++++++++++++++++ I N T E R E S T I N G +++++++++++++++++++

function addOne(num)
{
    return num + 1
}
console.log(addOne(5)) //-> if this is written above the function then also it will not give any error it will be executed smoothly but ...

const add1 = function addTwo(num1)
{
    return num1 + 2
}
console.log(add1(5)) // here also it will be executed but if we take this above the function addTwo then it will give error bcuz the function is assigned in a variable add1 and if it is moved above the function addTwo the compiler which reads the code line by line will think that add1 is not initialized yet   .....->> HOISTING IN JS