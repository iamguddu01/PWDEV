class User {
    name; // Public by default

    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello, ${this.name}`);
    }
}
console.log("By default implementations");
const u1 = new User("Govind");
u1.greet();
console.log(u1.name);
console.log("====================================================");



class Bank {
    #balance; // Private declaration accessible only inside the class 
    #pin;
    constructor(pin, balance){
        this.#balance = balance;
        this.#pin = pin;
    }
    #getBalance(){ // Private function implementation can't use it outside the class 
        return this.#balance
    }
    getBalance(pin){
        if(pin == this.#pin){
            return this.#getBalance(); // Using private func inside the ckass
        }else{
            return{
                status : 401,
                message : "Pin not valid"
            }
        }
    }
}
console.log("Private data mambers");
const acc = new Bank(1234, 1000);
let bal = acc.getBalance(124);
console.log(bal);
console.log("====================================================");
