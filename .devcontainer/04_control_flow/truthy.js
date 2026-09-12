//falsy values 
// false
// 0
// -0
// 0n
// "", '', ``
// null
// undefined
// NaN 

//truthy values
// true
// {}
// []
// 1
// -1
// "0"
// "false"
// function() {}
// new Date()
// /regex/
// Infinity
// -Infinity

// Example of truthy and falsy values in control flow
const values = [false, 0, -0, 0n, "", '', ``, null, undefined, NaN, true, {}, [], 1, -1, "0", "false", function() {}, new Date(), /regex/, Infinity, -Infinity];

values.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});