console.log("2" > 1); //true
console.log("02" > 1);   //true

console.log(null > 0);    //false
console.log(null == 0);    //false
console.log(null >= 0);    //true.     the reason is that equality check == and comparision > ,<,>=,<= work differently
// in comparision check the null is converted into 0 that it returning false in first 2 statement and true in the third

//===
console.log("2" === 2); //false because === checks for both value and type, and here one is string and other is number