// private : can be accessed only within the class
// protected : can be accessed within the class and its subclasses
// public : can be accessed from anywhere
class BancAccount{
    public readonly AC : string;
    protected readonly accountHolder : string;
    private balance : number;
    private pin : number;
    private address : string;
    protected isActive : boolean;
    constructor(AC : string, accountHolder : string, balance : number, pin : number, address : string){
        this.AC = AC; // Public and read only property
        this.accountHolder = accountHolder; // Protected and read only property
        this.balance = balance; // Private property
        this.pin = pin; // Private property
        this.address = address; // Private property
        this.isActive = true; // Protected property
    }
    getpin(){
        console.log(this.pin) // Accessing private property within the class
    }
}
const acnt = new BancAccount("123456789", "Alice", 1000, 1234, "123 Main St");
acnt.getpin() // Accessing private property through class method


class SavingsAccount extends BancAccount{
    constructor(AC : string, accountHolder : string, balance : number, pin : number, address : string){
        super(AC, accountHolder, balance, pin, address);
    }
    displayAccountInfo(){
        console.log(`Account Holder: ${this.accountHolder}`); // Accessing protected property because it's a subclass
    }
    getPin(){
        // console.log(this.pin) // Error: Property 'pin' is private and only accessible within class 'BancAccount'.
    }
}
const myAccount = new SavingsAccount("123456789", "Alice", 1000, 1234, "123 Main St");
console.log(myAccount.AC) // Accessing public property
myAccount.displayAccountInfo() // Accessing protected property through subclass method
// console.log(myAccount.accountHolder) // Error: Property 'accountHolder' is protected and only accessible within class 'BancAccount' and its subclasses.
// console.log(myAccount.balance) // Error: Property 'balance' is private and only accessible within class 'BancAccount'.
// console.log(myAccount.pin) // Error: Property 'pin' is private and only accessible within class 'BancAccount'.
// console.log(myAccount.address) // Error: Property 'address' is private and only accessible within class 'BancAccount'.
