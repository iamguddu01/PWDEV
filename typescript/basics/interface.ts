interface User {
  name: string;
  age: number;
  email?: string;
  greet(message: string): void;
  add(a:number, b:number):number
}
// In interface value can't be change
const newUser: User = {
  name: "Govind",
  age: 21,
  // email:"Developer@m.com", // Using ? in interface to ignore
  greet(message: string) {
    console.log(`${message}, ${this.name}`);
  },
  add(a:number, b:number):number{
    return a + b
  }
};


interface Animal {
    name:string
}
interface Reptile{
    isVenemous:boolean;
}
interface Dog extends Animal, Reptile{
    breed:string
}

// Function structure
type addFunc = (a:number, b:number) => number

// Combined (intersect)
type Admin = {
    role:string;
}
type user1 = {
    name:string;
    age:number;
}
type AdminUser = Admin & user1;

type userTuple = [string, number]
let u1 : userTuple = ["GOvinf", 20]

type nullableString = string | null;
type callback = (data:string) => void
