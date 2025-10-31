// function expression: the this inside it, refers to the global obj.

console.log(this);  // {}

const person = {
    name: "dewansh",
    greet: () => {
        console.log("Hello ", this.name);   // Hello undefined
        this.name = "pratyaksh";
    }
}

person.greet();
console.log(this);  // {name: "pratyaksh"}