let user = {};
const key = "height";
user.name = "Govind"; // Dynamic insertion
user["age"] = 22; // Dynamic insertion
user[key] = 5.4; // Dynamic insertion
user.isMarried = false;

console.log(user);

//Delete 
// delete user.name;
// delete user.age;
// delete user[key];
// console.log(user);

// Looping in object 
for(let key in user){
    // console.log(key);
    console.log(key, " : ", user[key]);  // Accesing variable in bracket key 
}                                         // dynamic => []
                                          // not dynamic => .
// Getting keys in an array
let arrOfKeys = Object.keys(user);
console.log(arrOfKeys);

// Getting value in an array 
let arrOfVal = Object.values(user);
console.log(arrOfVal);

// Getting both in an array
let allVal = Object.entries(user);
console.log(allVal);


// checking if the key is exist or not 
if (user["isMarried"] != undefined){
    console.log(user["isMarried"]);
}else{
    console.log("Not found");
}

// or

// console.log("isMarried" in user);
if (key in user){
    console.log("Property exists - value : ", user[key]);
}else{
    console.log("Property not found");
}