// let now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getDate() + 10);
// console.log(now);
// now.setMonth(now.getMonth() + 1).toLocaleString;
// console.log(now);


let now = new Date();
let future = new Date("2026-01-01");

let diff = future - now;

console.log(diff / (1000 * 60 * 60 * 24 ), "days remain to come new year");