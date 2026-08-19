// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date();
console.log(myDate); // current date and time --> 2026-08-19T00:27:15.565Z....not readable easily so we can use toString() method to convert it to readable format
console.log(myDate.toString()); // Wed Aug 19 2026 05:57:15 GMT+0530 (India Standard Time)  --> readable format
