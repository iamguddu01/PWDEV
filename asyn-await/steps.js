async function steps() {
    let x = 1
    x = await Promise.resolve(x+1)
    x = await Promise.reject(x+2).catch(e => {
        console.log("Second promise failed");
        return x     // NOTE : We can return the value from catch and will store inside the handler IF you dont return the x will be undefined
    })
    x = await Promise.resolve(x+3)
    console.log(x);
};
// steps();

Promise.resolve("OKAY")
.then(msg => {
    console.log(msg);
})
.then(() => {
    console.log("Second then function");
}).catch(error => console.log(error))
.finally(() => {
    console.log("Inside the finally the block");
})