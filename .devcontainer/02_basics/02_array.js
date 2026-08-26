const marvelHeroes = ['Iron Man' , 'Captain America', 'Thor']
const dcHeroes = ['Batman', 'Superman', 'flash']

const allHeroes = marvelHeroes.concat(dcHeroes) //here concat returns a new array that combines the elements of both marvelHeroes and dcHeroes arrays. The original arrays remain unchanged.
console.log(marvelHeroes) // ['Iron Man', 'Captain America', 'Thor']
console.log(dcHeroes) // ['Batman', 'Superman', 'flash']
console.log(allHeroes) // ['Iron Man', 'Captain America', 'Thor', 'Batman', 'Superman', 'flash']

//spread method can be more useful than concat method as it can be used to merge more than 2 arrays and also can be used to merge arrays with other data types like objects, strings, numbers etc.
const allHeroes2 = [...marvelHeroes, ...dcHeroes] //here spread operator (...) is used to spread the elements of both marvelHeroes and dcHeroes arrays into a new array. The original arrays remain unchanged.
console.log(allHeroes2) // ['Iron Man', 'Captain America', 'Thor', 'Batman', 'Superman', 'flash']

const another_array = [1,2,4,[3,4,2],6,7,8,[2,3,4,[2,7,8]]]
const real_array = another_array.flat(2) //here flat method is used to flatten the nested arrays into a single array. The parameter 2 is used to specify the depth of flattening. The original array remains unchanged.
console.log(real_array) // [1, 2, 4, 3, 4, 2, 6, 7, 8, 2, 3, 4, 2, 7, 8]

const real_array1 = another_array.flat(1) //here flat method is used to flatten the nested arrays into a single array. The parameter 1 is used to specify the depth of flattening. The original array remains unchanged.
console.log(real_array1) // [1, 2, 4, 3, 4, 2, 6, 7, 8, [2, 3, 4, [2, 7, 8]]]


const real_array2 = another_array.flat(Infinity) //here flat method is used to flatten the nested arrays into a single array. The parameter Infinity is used to specify the depth of flattening. The original array remains unchanged.
console.log(real_array2) // [1, 2, 4, 3, 4, 2, 6, 7, 8, 2, 3, 4, 2, 7, 8]

console.log(Array.isArray("ansh")) //false
console.log(Array.from("ansh")) //['a', 'n', 's', 'h']  here from method is used to create a new array from an array-like or iterable object. The original string remains unchanged. 

console.log(Array.from({name : "ansh"})) //[]  here from method is used to create a new array from an array-like or iterable object. The original object remains unchanged.it returns an empty array as the object is not iterable and it gets confused what to convert to array. It can only convert iterable objects like strings, sets, maps, etc. to arrays. //INTERESTING 

let score1 = 100;
let score2 = 200;   
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]  here of method is used to create a new array from a variable number of arguments. The original variables remain unchanged. It creates an array with the given arguments as elements. It can be used to create an array from any number of arguments, including non-iterable objects like numbers, strings, etc.