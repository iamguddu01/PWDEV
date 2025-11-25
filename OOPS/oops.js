// // const car = {
// //     brand : "Toyota",
// //     drive() {
// //         console.log(`Driving, ${this.brand}`);
// //     }
// // }
// // car.drive();

// // Modern OOPs concept
// class Car {
//     constructor(brand, year, model){
//         this.brand = brand; // data member / property of class
//         // this.type = "Electric";
//         this.year = year;
//         this.model = model
//     }
//     // Only 1 constructor is allowed in JS, It does not allow multiple constructor
//     // If you don't make construtor in JS, an default empty constructor will be executed by default.
//     // constructor(){ like this
//     //     this = {}
//     // }
//     drive(){ // Member function or behaviour of class
//         console.log(`Driving ${this.brand}`);
//     }
//     break(){
//         console.log(`Braking ${this.brand}`);
//     }
//     getconfig(){
//         console.log(this.brand, this.model, this.year);
//     }
// }
// const c1 = new Car("Audi");
// c1.drive();
// c1.break();

// const Toyota = new Car();
// Toyota.type = "Electric"
// console.log(Toyota.brand + " : " + Toyota.type);
// Toyota.getconfig();


class Account {
    #pin = null; // Making properties private using prefix #
    #balance = null; 
    #noOfWithdrawl = 0;
    constructor(holderName){
        this.holderName = holderName;
        this.#balance = 100;
        this.#pin = `${holderName}@1234`;
        this.#noOfWithdrawl = 0;
    }
    getBalance (pin){   // Getting private property usign getter methods
        if(!pin || (pin !== this.#pin))
            return {
                status : false,
                message : "Invalid Details"
            }
        return this.#balance;
    }
    deposit(amount, pin){
        if(!pin || (pin !== this.#pin))
            return {
                status : false,
                message : "Invalid Details"
            }
        this.#balance += amount;
        return true;
    }
    withdraw(amount, pin){
        if(!pin || (pin !== this.#pin))
            return {
                status : false,
                message : "Invalid Details"
            }
        if(this.#noOfWithdrawl >= 3) // Checker to check the no of withdrawls if exceeded returns status of decline
            return{
                status : false,
                message : "Limit reached of withdrawl"
            }

        if(amount > this.#balance){
          console.log("Insufficient balance"); 
        }else{
         this.#noOfWithdrawl++;
         this.#balance -= amount;
            return true;
        }
        
    }
}
const a1 = new Account("Govind");
console.log(a1.holderName + " : " + a1.balance + " : " + a1.p);
console.log(a1.getBalance("Govind@1234")); // Getter called
a1.deposit(10000, "Govind@1234");
console.log(a1.getBalance("Govind@1234"));
a1.withdraw(3000, "Govind@1234");
a1.withdraw(3000, "Govind@1234");
a1.withdraw(300, "Govind@1234");
a1.withdraw(300, "Govind@1234");
a1.withdraw(300, "Govind@1234");
a1.withdraw(300, "Govind@1234");
console.log(a1.withdraw(300, "Govind@1234"));
console.log(a1.getBalance("Govind@1234"));