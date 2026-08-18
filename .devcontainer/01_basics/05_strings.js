 const name = "Ansh"
 const repoCount = 50

 console.log(`My name is ${name} and my repo count is ${repoCount}`);   //My name is Ansh and my repo count is 50
//  -----> called String Interpolation

 const gameName = new String("anshas") // String Object
 console.log(gameName[0]); // a
 console.log(gameName.__proto__); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …} ----> these are prototypal methods of String Object

 console.log(gameName.length); // 6 
 console.log(gameName.toUpperCase()); // ANSHAS but it does not change the original string because strings are immutable in JavaScript
 console.log(gameName); // String {"anshas"}  the original string is not changed
 

console.log(gameName.charAt(0)); // a

const newString = gameName.substring(0, 4) // ans
console.log(newString); // ansh

const newString2 = gameName.slice(0, 4) // ansh
console.log(newString2); // ansh

const newString3 = gameName.slice(-6, -2)
console.log(newString3); // ansh  slice method can take negative index which means it will start counting from the end of the string

const newString4 = "   anshansh    "
console.log(newString4); //    anshansh
console.log(newString4.trim()); // anshansh  trim method removes the whitespace from the start and end of the string

const url = "https://ansh.com/ansh%20ansh%20ansh%20ansh"
console.log(url.replace("%20" , "-")); // https://ansh.com/ansh-ansh%20ansh%20ansh replace method replaces the first occurrence of the string
console.log(url.replaceAll("%20" , "-")); // https://ansh.com/ansh-ansh-ansh-ansh  replaceAll method replaces all occurrences of the string 
console.log(url.includes("ansh")); // true  includes method checks if the string contains the specified string

//visit this for string methods revision https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

const str = "ansh%20ansh%20ansh%20ansh";
console.log(str.split("%20" )); // ["ansh", "ansh", "ansh", "ansh"]  split method splits the string into an array of substrings based on the specified separator
console.log(str.split("%20" , 2)); // ["ansh", "ansh"]  split method splits the string into an array of substrings based on the specified separator and limit the number of substrings to 2
