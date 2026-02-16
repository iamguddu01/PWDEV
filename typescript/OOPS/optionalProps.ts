// Optional properties
class Students{
    name:string;
    age:number;
    grade?:string
    constructor(name : string, age : number, grade? : string){ // Grade is optional in this params (use ? to declare optional properties)
        this.name = name;
        this.age = age;
        this.grade = grade; // Optional properties
    }
}

const student1 = new Students("Govind", 23, "A+")
const student2 = new Students("Rohit", 22)
