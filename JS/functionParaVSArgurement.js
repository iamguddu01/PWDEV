// default parameters inside the function
function add(a, b = 20) {    // parameters of the function
    console.log(a + b);
}

add(10);
add(10, 50);


function greet() {
    console.log("Hello!");
}

function personalisedGreet(name) {
    console.log("Hello, " + name);
}

function veryPersonalisedGreet(name, time) {
    console.log("Hello " + name + ", Good " + time);
}

greet();
personalisedGreet("Anurag");
veryPersonalisedGreet("govind", "evening");


// function add(a, b) {
//     console.log(a + b);
// }

// function add(a, b, c) {
//     console.log(a + b + c);
// }

// function add(a, b, c, d) {
//     console.log(a + b + c + d);
// }

// function add(a, b, c, d, e) {
//     console.log(a + b + c + d + e);
// }