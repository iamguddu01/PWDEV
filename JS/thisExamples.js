// let obj1 = {
//     name: "alice",
//     greet() {
//         console.log(this.name);
//     }
// }

// obj1.greet();

// function declaration: the this inside it, refers to the parent of that function








// let obj2 = {
//     name: "alice",
//     greet: () => {
//         this.name = "anurag!";
//         console.log(this);
//     }
// }

// obj2.greet();

// function expression: the this inside it, refers to the global obj.




// let obj2 = {
//     name: "alice",
//     greet1: () => {
//         this.name = "anurag1!";
//         console.log(this);
//     },
//     greet2() {
//         this.name = "anurag2!";
//         console.log(this);
//     },
//     greet3: function() {
//         this.name = "anurag3!";
//         console.log(this);
//     }
// }

// obj2.greet3();  // global


// let obj1 = {
//     name: "Alice",
//     greet() {
//         setTimeout(function() {     // register this code in execution env
//             console.log(this.name);
//         }, 1000);
//     }
// }

// obj1.greet();

let obj2 = {
    name: "Alice",
    greet() {
        setTimeout(() => {          // register this code in execution env
            console.log(this.name);
        }, 5000);
    }
}

obj2.greet();

console.log("Hello 1!");
console.log("Hello 2!");
console.log("Hello 3!");
console.log("Hello 4!");