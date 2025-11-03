let person = {
    name : "ravi",  // child property
}

person.__proto__.age = 22;          // parent property/ Inherted property // This syntax works in node terminal
// person.prototype.age =22;    // It will work in chrome console

for (let key in person){
    console.log(key);
}

console.log(person.hasOwnProperty("age"));  // Asking the person that the age property is his own or parents property in true false
console.log(person.age);