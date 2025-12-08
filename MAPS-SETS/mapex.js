// const roles = new Map(); // Setting  values
// roles.set("Admin", 1);
// roles.set("manager", 2);
// roles.set("user", 3);

// console.log(roles);



// const roles = new Map([ // IN two dimensional array while creation time directly
//     ["admin", 1], 
//     ["Manager", 2],
//     ["User", 3]
// ])
// console.log(roles);


const rolePermission = new Map([
    ["admin", ["create", "read", "update", "delete"]],
    ["Viewer", ["read"]],
    ["owner", ["create", "read", "update", "delete"]],
    ["editor", ["update", "delete"]]
])
// console.log(rolePermission);
console.log(rolePermission.get("admin")); // Getting values seprately 
console.log(rolePermission.has("admin")); // has will check the key admin it is available in map or not return true false

// Iteration 
for(const eachVal of rolePermission){
    console.log(eachVal);
}

// Iteration on map 
for(const eachKeyValue of rolePermission){
    console.log(eachKeyValue[0] + " : " + eachKeyValue[1]);
}

// Destructuring by loop
for(const [role, permission] of rolePermission){
    console.log(role + " => " + permission);
}


console.log(rolePermission.keys()); // .keys return a map iterator not an array its a function
// Iterating using keys
for(const role of rolePermission.keys()){
    // console.log(role);
    console.log(role + " : " + rolePermission.get(role));
}
// Values
console.log(rolePermission.values());

// Size
console.log(rolePermission.size); // Its variable reference

// Clear 
// rolePermission.clear(); // For clearing the whole map

// Delete
rolePermission.delete("admin") // To delete a particular key 
console.log(rolePermission);

