// Inbuilt function in JS to call API 
fetch("https://api.adviceslip.com/advice").then((res) => {    // Bydefault taking It as a GET API
    console.log("API called successfully");
    // console.log(res.json()); // response.json returns a promise so thats why we are chaining a second then to get data
    return res.json();
}).then((data) => {
    console.log("Second then method");
    console.log(data);
}).catch((error) => {
    console.log("Something went wrong");
    console.log(error);
});
