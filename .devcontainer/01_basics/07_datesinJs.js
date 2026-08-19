// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date();
console.log(myDate); // current date and time --> 2026-08-19T00:27:15.565Z....not readable easily so we can use toString() method to convert it to readable format
console.log(myDate.toString()); // Wed Aug 19 2026 05:57:15 GMT+0530 (India Standard Time)  --> readable format
console.log(myDate.toLocaleString("en-IN")); // 19/08/2026, 5:57:15 PM
console.log(typeof (myDate)); // here months starts from 0 ...january--> 0

// let myCreatedDate = new Date(2026, 7, 19);
let myCreatedDate = new Date(2026, 7, 19, 5, 3);

console.log(myCreatedDate.toString()); // Wed Aug 19 2026 05:03:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString("en-IN")); // 19/08/2026, 5:03:00 AM
console.log(myCreatedDate.toDateString()); // Wed Aug 19 2026

let myTimeStamp = new Date.now(); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp); // 1692409635565

console.log(myCreatedDate.getTime()); // 1692405780000 --> returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date

let newDate = new Date()
console.log(newDate.getTime()); // 1692409635565 --> returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the current date

console.log(newDate.getFullYear()); // 2026
console.log(newDate.getMonth()); // 7 --> August (months are zero-indexed)
console.log(newDate.getDate()); // 19 --> day of the month
console.log(newDate.getDay()); // 3 --> Wednesday (days are zero-indexed, Sunday is 0)
console.log(newDate.getHours()); // 5 --> current hour
console.log(newDate.getMinutes()); // 57 --> current minute
console.log(newDate.getSeconds()); // 15 --> current second
console.log(newDate.getMilliseconds()); // 565 --> current millisecond

newDate.toLocaleDateString('default' , {
    weekday: 'long', // long, short, narrow output--> Wednesday
    year: 'numeric', // numeric, 2-digit output--> 2026
    month: 'long', // numeric, 2-digit, long, short, narrow output--> August
    day: 'numeric' // numeric, 2-digit output--> 19
})