// Normal 
let name = "Adarsh";
let age = 22;

console.log("My name is ", name, "and my age is ", age);

// String literals
console.log(`My name is ${name} - and my age is ${age}`);


// let key = "user"     normal
// let obj = {
//     [key + "_id"]: 1
// }



// using literals
let key = "user"
let obj  = {
    [`${key}_id`]:1
}
console.log(obj);