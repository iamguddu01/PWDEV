// Working in background for long task and going on 
// Thats called blocking code execution or asyncronous code execution
console.log("Start");
setTimeout(() => {
    console.log("Done with the long task");
}, 3000);
console.log("End");