let score = "33abc"
console.log(typeof score)
console.log(typeof (score))
let valueInNumber = Number(score) //converts the string into number whereas the string is not a valid number, it will return NaN
console.log(valueInNumber)      //NaN
console.log(typeof valueInNumber)  //number

let score1 = null
console.log(typeof score1)  //object
console.log(typeof (score1))  //object
let valueInNumber1 = Number(score) //converts the null into number, it will return 0
console.log(valueInNumber1)      //0
console.log(typeof valueInNumber1)  //number

let score2 = true 
console.log(typeof score2)  //boolean
console.log(typeof (score2))  //boolean
let valueInNumber2 = Number(score2) //converts the boolean into number, it will return 1
console.log(valueInNumber2)      //1
console.log(typeof valueInNumber)  //number
