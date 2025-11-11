function log(message){
    console.log(`[LOG] : ${message}`);
}
module.exports = {
    log
}

// Another way
exports.log = function(message){  // It is valid 
    console.log(`[LOG] : ${message}`);   
}

// Wrong way 
exports = {  // Can't assign directly like that 
    log
}