let arr = [1, 2, 3, 4];

let arr1 = [1, "anuragh", true, 1.1, [1, 2, 3], {name: "govind!"}];

console.log(arr[0]);
console.log(arr[3]);

console.log(arr1[5].name);

// push: add a new element at the end of the array

arr.push(5);

console.log(arr);

// unshift: is used to add an element at the begining of the array

arr.unshift(6);

console.log(arr);

// pop: remove the last element from the array

arr.pop();

console.log(arr);

// shift: remove the first element from the array

arr.shift();

console.log(arr);


for(let i=0; i<arr.length; i++)
    console.log(arr[i]);

// forEach loop
arr.forEach(function(eachElement) {
    console.log(eachElement)
});

// for of loop
for(let eachElement of arr) {
    console.log(eachElement);
}

console.log(arr);

// [2, 4, 6, 8]

let newArr = [];

for(let each of arr) {
    newArr.push(each * 2);
}

console.log(newArr);

// map = if you want to create a new array, but modulating the elements of the original array.

const newMappedArr = arr.map(function(each) {
    return each * 2;        // [2, 4, 6, 8]
});

console.log("original  : ", arr);
console.log("new : ", newMappedArr);

// filter: it executes the filtering callback logic on each element and returns the filtered values in a new array.

let evenArr = arr.filter(each => each % 2 == 0);

console.log(evenArr);

console.log(arr);


(accumulator, eachValue) => {

}

const sum = arr.reduce((currSum, eachValue) => {    // 1st element, 2nd element
    console.log(currSum, " : ", eachValue);
    return currSum + eachValue;
}, 10);

console.log(sum);

console.log(arr);

console.log(arr.toString());

console.log(arr.join("-"));

let unsortedArr = [3, 4, 1, 2];     // 1, 4

console.log(unsortedArr);

unsortedArr.sort((a, b) => {
    return b - a;
});

console.log(unsortedArr);

console.log(arr);

delete arr[1];

console.log(arr);

arr.splice(1, 2, 400, 3, 5, 10);

console.log(arr);

if(arr.includes(400, 1)) {
    console.log("Yes 400 is present!");
} else {
    console.log("No, 400 is not present!");
}

console.log(arr);

console.log(arr.indexOf(100));

const foundValue = arr.find(function(each) {
    return each === 100;
});

console.log(foundValue);

console.log(arr);


console.log(arr.slice(0, -5));