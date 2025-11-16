console.log("a.js is loaded");
require('./b'); // it is circular loop because when we require b in b the b is requiring a so it will looping
console.log("In a.js b is required"); 
// Circular dependency breaks the code and stops the server