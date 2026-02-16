class Employee{
    salary : number = 50000; // Default value
    role : string = "Agent" // Default value
    isInsured : boolean = true; // Default value
    setSalary(newSalary : number){
        this.salary = newSalary
    }
}
const emp1 = new Employee()
// console.log(emp1.salary); 
emp1.setSalary(70000);
// console.log(emp1.salary);



