


let day = "Monday";


// switch(expression) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     case value3:
//         // code block
//         break;
//     default:
//         // code block
// }


switch(day) {
    case "Monday":
        console.log("Fully charged and exited!");
        break;
    case "Wednesday":
        console.log("Mid week blues!");
        break;
    case "Thurday":
        console.log("A lot of work!");
        break;
    case "Friday":
        console.log("Nice and chill, until we dont get any issues after 5");
        break;
    case "Saturday":
        console.log("Pretty code chill, with adhrak chai, and my almond cake!");
        break;
    case "Sunday":
        console.log("Very bad day of the week!");
        break;
    default:
        console.log("No clue!");
}


let x = 2;

if(x == 1) {
    console.log("One!");
} else if(x == 2) {
    console.log("Two!");
} else if(x == 3) {
    console.log("Three!");
} else if(x == 4) {
    console.log("Four");
} else {
    console.log("I do not know!");
}

switch(x) {
    case 1:
        console.log("One!");
        break;
    case 2:
        console.log("Two!");
    case 3:
        console.log("Three");
    case 4:
        console.log("Four!");
    default:
        console.log("I do not know!");
}