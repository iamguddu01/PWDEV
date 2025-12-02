// Method overloading having multiple function with same name but different return type and 
// different set of arguments

// Its not support in js 
// We are mimicing it

// function add(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments.length);
// }
// add(1,2,3);

function add(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
// console.log(add(1,2,3));


//=======================================================//

class Logger{
    // success/general info, failure message (error), error (error object)
    log(message, error){
        if(typeof message == "string" && !error){
            console.log(`INFO : ${message}`);
        }else if(message instanceof Error){
            console.log(`ERROR : ${message.message}`);
        }else if(typeof message === "string" && error instanceof Error){
            console.log(`SyntaxError : ${message} -> ${error.message}`);
        }
    }
}
let logger = new Logger();
logger.log("Success");
logger.log("User validated");
logger.log(new Error("Something went wrong"));
logger.log("Something went wrong", new SyntaxError("Code Issue"));