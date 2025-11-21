async function fetchData () {
    console.log("Before API call");

const postData = await fetch("https://jsonplaceholder.typicode.com/posts/1");

console.log("After post");
console.log(postData);

const userData = await fetch("https://jsonplaceholder.typicode.com/users");

console.log("After both");
console.log(userData);
};

// fetchData();

// Using Promise.all to run both api fetch process prallely together to reduce the respond time of function
async function betterFetchData () {
    console.log("Before API call");
   const response = await Promise.all([ // Here both API will be fetched together in parallel so the dependency of second API will be no longer
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.typicode.com/users")

    ]);
    console.log("Both api called");
    console.log(response);
};
betterFetchData();