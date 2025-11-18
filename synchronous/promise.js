// When a task takes a certain amount of time to compplete and promise gives the response if the task will done or not
function httpCall(){
    const p = new Promise((resolve, reject) => { // Promise is a class and asyncronous but customisable and dont wait to complete
        console.log("Promise started");
        setTimeout(() => {
            // resolve("Task completed");
            return reject("Something went wrong"); // Always return immediatyely to avoid later code execution
        }, 3000);
        console.log("Promise End");
    });

    return p;
}
console.log("start");
// httpCall();
const p = httpCall();
p.then((msg) => { // If promise completed succesfully then function then() will completed.
    console.log(msg);
}).catch((msg) => {
    console.log("promise is rejected !", msg);
})
console.log("End");