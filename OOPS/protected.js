class Employees{
    constructor(salary){
        this._salary = salary; // Protect-style declaration
    }
}
class Manager extends Employees{
    // constructor(salary){ // If you dont make a constructor it will be created by default or automatically by JS
    //     super(salary)
    // }
    showSalary(pin){
        if(pin == 1234){
            return this._salary;
        }
    }
}
const m1 = new Manager(69000);
console.log(m1.showSalary(1234));
console.log(m1._salary); // This will work and wont stop you to acces the salary bcoz JS Does not support concept of protected by default but we assume it like this