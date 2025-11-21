// Callback hell also called dependency hell
// setTimeout(() => {
//     console.log("I am the first callback");

//     setTimeout(() => {
//         console.log("I am second callback");

//         setTimeout(() => {
//             console.log("I am third callback");
//         }, 3000);

//     }, 2000);

// }, 1000);

// Here is the solution for callback hell 
new Promise((res, rej) => res(1))
.then(val => val +1)
.then(val => val +2)
.then(val => val +3)
.then(val => console.log(val))
.catch(e => console.log(e));