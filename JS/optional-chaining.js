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


// in func
obj.greet(); // THrow error because its not accessing its calling and bcoz its not available so you are asking undefined
obj.greet?.();  // Safe optional variable access
