class Persons {
    constructor(public name: string, public age: number) {}
}

class Employees extends Persons {
    constructor(name: string, age: number, public employeeId: number) {
        super(name, age); // Call the constructor of the parent class (Persons) to initialize name and age
        this.employeeId = employeeId; // Initialize employeeId specific to Employees class

    }
}
const emp2 = new Employees("Alice", 30, 101);
console.log(emp2.name); // Output: Alice (inherited from Persons)
console.log(emp2.age); // Output: 30 (inherited from Persons)
console.log(emp2.employeeId); // Output: 101 (specific to Employees)    