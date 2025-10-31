


// for(initializer; contional; incr/decr) {

// }

// print the values 1 -> 5

// for(let i=1; i<=5; i++) { // 1 -> 2 -> 3 -> 4 -> 5 -> 6
//     console.log(i);     // 1, 2, 3, 4, 5
// }


// 1 - 10

// console.log("Even!");

// for(let i=2; i<=10; i+=2) { // 2 -> 4 -> 6 -> 8 -> 10 -> 12
//     console.log(i);
// }

// console.log("Odd!");

// for(let i=1; i<=10; i+=2) { // 1 -> 3 -> 5 -> 7 -> 9 -> 11
//     console.log(i);
// }

// console.log("If condition even numbers!");

// for(let i=1; i<=10; i++)
//     if(i % 2 == 0) console.log(i);



// console.log("The loop the completed!");

// let names = ["vaibhav", "ajmer", "mahaveer", "someone"];

// // 0 - (n-1) -> (0 - 2)

// console.log(names.length);

// for(let i=0; i<names.length; i++) { // 0 -> < 3 (0 -> 2)
//     console.log(names[i]);
// }


// while(CONDITION) {
//     // code to execute
// }


// 1 -> 10 using a while!

// let i = 1;

// while(i <= 10) {
//     console.log(i); // 1 -> 3 -> 5 -> 7 -> 9 -> 11
//     i+=2;
// }

// console.log("while loop compeleted, i: " + i);

// let x = 10;

// // 10 - 1

// while(x > 0) {
//     console.log(x); // 10 -> 11 -> 12 -> 13 -> 14 -> 15 ........ Infinity!
//     x++;
// }

// console.log("while loop compelted x : " + x);


// do {
//     // code to execute
// } while(CONDITION);

// let i = 0;

// do {
//     i++;
//     console.log(i);     // print => 1
// } while(i <= -1);        // 1 <= -1

// console.log("Loop end! i : " + i); // 1



for(let i=0; i<=10; i++) {      // 0, 1, 2, 3, 4 
    console.log(i);

    if(i == 4) {
        console.log("Breaking the loop! ", i);
        break;
    }
}

console.log("out of the loop!");


let i = 1;
while(i <= 10) {
    if(i == 5 || i == 8) {
        i++;
        continue;
    }

    console.log(i);

    i++;
}

console.log("Out of the loop! i : " + i);