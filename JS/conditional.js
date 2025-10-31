// let marks = 45;

// if(marks > 95) {
//     console.log("A +");
// } else if(marks >= 80 && marks <= 95) {
//     console.log("A");
// } else if(marks >= 70 && marks < 80) {
//     console.log("B");
// } else if(marks >= 50 && marks < 70) {
//     console.log("C");
// } else {
//     console.log("D");
// }



let num = 12;

if(num % 5 == 0) {
    console.log("Num is divisible by 5");

    if(num % 2 == 0)
        console.log("Num is divisible by 5 and 2");
    else
        console.log("Num is divible by 5 but not by 2");
} else
    console.log("Num is not divisble by 5");

if(num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");