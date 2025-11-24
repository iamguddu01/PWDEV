// let text = "Javascript is power full, we can write amazing script using it!";
// let idx = text.indexOf("script", 24); // If not available it will give -1 means does not exixt searching from index 24
// console.log(idx);
// console.log(text.charAt(47)); // Getting the char which is on 47 index
// console.log(text[47]);

// const email = "govind@gmail.com";
// let isValidEmail = email.includes("@"); // Include will check is the @ available or not and returns true or false
// console.log(isValidEmail);


// let files  = ["resume.pdf","bill.pdf","user.csv","report.pdf", "photo-report.png", "report-2025.pdf"];

// // let reportFiles  = [];
// // files.forEach(efile => { // We are not using find bcoz it will give the first intial match only and then stopped
// //     if(efile.startsWith("report"))
// //         reportFiles.push(efile);
// // });
// // console.log(reportFiles);

// reportfiles = files.filter(efile => {
//     if(efile.startsWith("report"))
//         return true
// });
// console.log(reportfiles);

// let text = "Javascript is power full, we can write amazing script using it!";
// let result = text.startsWith("script", 47);
// console.log(result);
// console.log(text.endsWith("!"));


// // Changing string into array
// let str = "1,2,3,4,5"; 
// let arr = str.split(",").map((e) => {
//     return parseInt(e);
// }).filter(eval => eval % 2 == 0);
// console.log(arr);



// Substring does not support negative indexing but slice does
let text = "Javascript is power full, we can write amazing script using it!";
let ss = text.substring(20, 40);
console.log(ss);


// Replace cant change the string : )
let str = "Hello World";
console.log(str.replace("Hello", "HI"));
console.log(str);



