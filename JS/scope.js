// // global scope

// let msg = "I am a global variable!";

// console.log(msg);

// if(2 == 2) {
//     console.log(msg);
// }

// function func() {
//     console.log(msg);
// }

// func();


// // functional scope

// function testScope() {
//     let a = "Inside the function";      // inside the function - function scope

//     console.log(a);
// }

// testScope();

// console.log(a);


// block scope

if(true) {
    var a = 10; // global scope
}

console.log(a);