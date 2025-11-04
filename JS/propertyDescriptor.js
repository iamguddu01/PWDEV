// To restrict to update and delete etc...
// Making object read only 
let obj = {
    name : "Govind",
    age : 22
}
Object.defineProperty(obj,'name',{   // Now no one write and update name property
    writable : false // Not allow to write
})
obj.name = "Sanjay";   // Silently not allowed to update
delete obj.name;  
obj.name = "Sanjay";     //Overiding the property now this will be added

Object.defineProperty(obj, 'name', {
    configurable : false       // Now the this will restrict to delete name property from object
})

console.log(obj);

Object.defineProperty(obj, 'age', {
    enumerable : false       // Not able to iterate in loop (cant get age in loop)
})

for (let key in obj){
    console.log(key);
}