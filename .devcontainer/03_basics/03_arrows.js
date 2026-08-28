// const user = {
//     username : "ansh",
//     price : "999",
//     welcomeMessage : function()
//     {
//         console.log(`${this.username} , welcome to website`); //this keyword used to refer the keys used inside the scope
//         //console.log(this); //..this here runs the current context ..prints the whole keys and values of the current object 
        
        
//     }
// }
// user.welcomeMessage();
// user.username = "sam" //here the context is changed to sam for username so it will be changed 
// user.welcomeMessage(); 
// console.log(this); //this here prints this {} when the above functions are not called out and if they are called out then the output of the functions will be printed but {} will also be printed 

//since it is a node environment and there is no variable declared globally here to whom this can point to or give the context to .......in browsers when we use console.log(this)...instead of referring to empty object it refers to window{} object 

//this can be used only inside the objects not directly only into the fucntions

// function chai()
// {
//     console.log(this) // here "this" will give some big output ..run and check it out but if we say like username = "ansh" and then consol.log(this.username)..it will show undefined 
// }
// chai()

//+++++++++++++++ ARROW FUNCTION +++++++++++++++

const chai = () => {
    username = "ansh"
    console.log(this); // output -> {}
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));

//IMPLICIT RETURN
//       |
//       |
// const addTwo = (num1, num2) => num1 + num2

 //const addTwo = (num1, num2) => (num1 + num2)  --> if used curly braces {} then we have to use return and if () then we dont have to use return
const addTwo = () => ({username : "ansh"})     //to return the object it should also be wrapped with ()


 console.log(addTwo(3,5));

