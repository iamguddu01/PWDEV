// var x = 100;    // global/module scope => x = 100

// function func() {
//     var y = 200;    // functional scope => x = 200

//     console.log(x, " : ", y);     // 200
// }

// func();
// console.log(x);     // 100







// var x = 100;    // global scope => x = 200
// console.log(x); // 100

// {                   // block
//     var x = 200;    // x = 200
//     console.log(x);
// }

// console.log(x);


var x = 100;        // global scope
console.log(x);     // 100

{
    let x = 200;    // block / local scope
    console.log(x); // 200
    x = 300;
    console.log(x); // 300
}

console.log(x);     // 100