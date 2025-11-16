// Inbuilt modulei in node
const fs = require('fs');
// Creating a file named hello.txt and writing the text, that is is passed in paramenter
fs.writeFileSync('hello.txt', 'Hello common JS!'); 
// Reading file synchronously
const data = fs.readFileSync('hello.txt', 'utf-8');  // Open file and read file content in utf-8 format 
console.log(data);