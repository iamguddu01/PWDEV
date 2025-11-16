// HTTP module inbuilt in node to manage api calls
// HTTP -> Hypertext Transfer Protocol
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {

    let data = "";
    // Step - 3 Read each and every data and store in data variable
    res.on('data',(chunk) => {  // in on we can listen events like here listening data (means repond on data listen)
        data += chunk;
    });
    // Listen to end event to know if full data is recieved 
    res.on('end', () => { // Listening end event 
        let jsonData = JSON.parse(data);
        console.log(jsonData);
    });
});
console.log("Hello");