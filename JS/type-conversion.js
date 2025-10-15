console.log("5" + 2);

console.log(2 + 3.5);

console.log("5" - 2);

console.log("5" *2);

console.log("5" / 2);

console.log("5" % 2);

console.log(true + 1);

console.log(false - 1);

console.log("3" + true);   // Output will 3true bcoz the first value is string so thats why 2nd value will converted to string and will be "true " so output will 3true

console.log("3" - true);

console.log(null + 1); // Null -> false -> 0

console.log(undefined + 1);  // undefined -> NAN


/*Type conversion : When JS needs to operate on different data types, it tries to convert one type to another -> This process is called type conversion */

// All these examples are implicit type conversion bcoz JS did it automatically 




// Explicit type conversion 
console.log(Number('42'));   // String converted to number 
console.log(Number("42px"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number("abcd"));
console.log(+"10"); // Bcoz of this plus the typeof is number not a string 
console.log("10"*1); // Bcoz of multiplication sign it will converted to number to perform the action


// String
console.log(String(12345));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));   // Converts to string 

console.log(123 + '');
console.log(true + '');

//Boolean
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean(''));
console.log(Boolean(123));  // Converts to boolean
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));


console.log(!!"Helo");
console.log(!!0);


const user = {name : "Govind", age: 22};
console.log(user + '');
console.log(typeof(user + ''));



let age = "10"; 
console.log(Number(age) + 5); 
console.log(parseInt(age) + 5); // Line 78 79 will do same work in this case 


let username = "";
if(username){
    console.log("Valid");
}else{
    console.log("Not valid");
}



console.log(0 == false);  // Allows us to perform type conversion (Not that strict )
console.log(0 === false);   // Strict type check, does not allow type conversion 