// Every single file in js, is a module itself

// 1st way
// const add = (a,b) => {
//     return a+b;
// };

// const substract = (a,b) => {
//     return a-b;
// };


// module.exports = {
//     add,
//     substract
// }

// 2nd way

// console.log(module.exports);
// module.exports.add = (a,b) => {
//     return a+b;
// }
// module.exports.substract = (a,b) => {
//     return a-b;
// }
// console.log(module.exports);

//3rd way
module.exports = function(message) {
    console.log("Exporting function");
}


// Every file has function that conatains exports, require, module, __filename, __dirname
//example

// NOTE => Its not a IFFE func, you can reffer it a anonymous func
// (
//     function(exports, require, module, __filename, __dirname){
//         // All your file/module is stored here
//         let name = "Govind"
//     }
// )
console.log(module);
console.log(exports);
console.log(require);
console.log(__dirname);
console.log(__filename);