const myArr = [1, 2, 3, 4, 5];
console.log(myArr); // [1, 2, 3, 4, 5]
console.log(myArr.length); // 5
console.log(myArr[0]); // 1 

console.log(myArr.push(6)); // 6  adds an element to the end of the array and returns the new length of the array
console.log(myArr); // [1, 2, 3, 4, 5, 6]

console.log(myArr.pop()); // 6  removes the last element from the array and returns that element
console.log(myArr); // [1, 2, 3, 4, 5]

console.log(myArr.shift()); // 1  removes the first element from the array and returns that element
console.log(myArr); //    [2, 3, 4, 5] 

console.log(myArr.unshift(1)); // 5  adds an element to the beginning of the array and returns the new length of the array  

console.log(myArr.includes(3)); // true  checks if the array contains the specified element and returns true or false
console.log(myArr.indexOf(3)); // 2  returns the index of the first occurrence of the specified element in the array, or -1 if it is not found

console.log(myArr.reverse()); // [5, 4, 3, 2, 1]  reverses the order of the elements in the array and returns the reversed array
console.log(myArr); // [5, 4, 3, 2, 1]  the original array is changed

console.log(myArr.sort());  // [1, 2, 3, 4, 5]  sorts the elements of the array in place and returns the sorted array
console.log(myArr); // [1, 2, 3, 4, 5]  the original array is changed

console.log(myArr.slice(1, 3)); // [2, 3]  returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(myArr.splice(1, 2)); // [2, 3]  removes elements from the array and returns the removed elements. The first parameter is the index at which to start changing the array, and the second parameter is the number of elements to remove. The original array will be modified.

const newArr = myArr.join(); // "1,2,3,4,5"  joins all elements of the array into a string and returns the string
console.log(newArr); // "1,2,3,4,5"
console.log(typeof newArr); // string

const newArr2 = myArr.join(" - "); // "1 - 2 - 3 - 4 - 5"  joins all elements of the array into a string with the specified separator and returns the string
console.log(newArr2); // "1 - 2 - 3 - 4 - 5"

const newArr3 = myArr.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]  merges two or more arrays and returns a new array
console.log(newArr3); // [1, 2, 3, 4, 5, 6, 7, 8]