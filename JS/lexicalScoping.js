// lexical scoping/chaining

let a = 10; // global scope

if(true) {
    let b = 20; // parent scope || 1st if condition scope
    if(true) {
        let c = 30; // local most scope || 2nd if condition scope

        console.log(a, " : ", b, " : ", c); // 10 : 20 : 30
    }
}