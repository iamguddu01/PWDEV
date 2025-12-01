// let rawContent = "asdfghn";
// let output = JSON.parse(rawContent);
// console.log(output);
// console.log("Completed");
class JsonParseError extends Error{
    constructor(message){
        super(message);
        this.name = "JSONParseError";
    }
}
try{
    let rawContent = "sdfghn";
    let output = JSON.parse(rawContent);
    console.log(output);
}catch(error){
    throw new JsonParseError("Error occured while parsing JSON"); // Unhandled throw error
    // console.log(error.name); // Three things can be extracted from an error
    // console.log(error.message);
    // console.log(error.stack);
}
try{
    console.log(res);
}catch(error){
    console.log(error.message);
}