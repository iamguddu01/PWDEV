// pure functions

function add(x, y) {
    return x + y;
}

 // => 30
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));
console.log(add(10, 20));

// impure functions

let x = 0;

function addToX(y) {
    x += y; // 0 + 1 => 1

    return x;
}

console.log(addToX(1));  // 1
console.log(addToX(1));  // 2
console.log(addToX(1));  // 3
console.log(addToX(1));  // 4