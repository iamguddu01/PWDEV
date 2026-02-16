class Bank{
    private _balance : number;
    constructor(initialBalance : number){
        this._balance = initialBalance;
    }
    get balance() : number{
        return this._balance;
    }
    set balance(amount : number){
        if(amount < 0){
            console.log("balance cannot be negative")
        }else{
            this._balance = amount
        }
    }
}
const account = new Bank(1000) 
console.log(account.balance) // Getting
account.balance = 5000 // Setting
console.log(account.balance) // Getting