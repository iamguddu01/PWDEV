let obj = {
    profile:{ 
        name :"Rohan"
    }
}
console.log(obj.profile.name);
console.log(obj.profile.city); // undefined
// console.log(obj.info.name);  // Throw error bcoz cannot read property of undefined
console.log(obj?.info?.name);   // Handling => now it will check is the property is available or not and if not dont access
console.log("hello ");     // Now execute because of ? 