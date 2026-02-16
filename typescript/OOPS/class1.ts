class User {
    name : string;
    age : number;
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
}
let user1 = new User("alice", 30);

class Calculator{
    add(a : number, b : number) : number{
        return a + b;
    }
    subtract(a : number, b : number) : number{
        return a - b;
    }
    multiply(a : number, b : number) : number{
        return a * b;
    }
    divide(a : number, b : number) : number{
        if(b === 0){
            throw new Error("Can't divide by 0")
        }
        return a / b;
    }
}

let calc = new Calculator()
console.log(calc.add(4,5))
