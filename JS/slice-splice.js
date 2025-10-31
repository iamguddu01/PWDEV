// Slice
// it does not affect array 
let arr = [1,2,3,4,5];
let firstThree = arr.slice(0,3);
console.log(firstThree);
// copying array
let copyArr = arr.slice(0,5);// Dont provide end index to take complete array by default
// let copyArr = arr.slice(0); use that to take complete array 
console.log(copyArr);
console.log(arr.slice(2)); // output- 3 4 5 
console.log(arr.slice(-2)); // output - 4 5
console.log(arr.slice(1,-1)); // output - 2,3,4


// Splice
// In splice array mutates or change 
let ar = [1,2,3,4,5];
// Adding elements with the help of splice
//ar.splice(5, 0, 7, 8);
//console.log(ar);
ar.splice(-2,2);
console.log(ar);