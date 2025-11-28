class User {
    constructor(name){
        this.name = name
    }
    static talk(user){
        console.log(`${user.name} can talk`);
    }

}
// Each instance will occupy memory for stoting name and function espacifically
const u1 = new User("Govind"); // 100 byte
// u1.talk();

const u2 = new User("Rahul"); // 100 byte
// u2.talk();

User.talk(u1);





// Using static keyword to making the value static for all instance and save memory space
class Maths {
    static PI = 3.14; // Now all instance of MAths class has PI by default 
    static calculateArea(r){ //  Making func static to avoid changes now it is single refrenced by its class name
        return this.PI * r * r;
    }
}
let m1 = new Maths();
let m2 = new Maths();
let m3 = new Maths();

console.log(m1.PI); // But we can't access it like this 
console.log(Maths.PI); // Because it is stati so it will call by class or with class

// m2.calculateArea = (r) => { // Manipulating the func and the output will be wrong 
//     return r;
// }
Object.freeze(Maths); // It will stop to making changes in the class

Maths.calculateArea  = (r) => { // Not allowed / not working becoz freeze
    return r; 
} 
// m1.calculateArea(3); // It is invalid bcoz m1 dont have funt calculate area now this func belongs to class name


// Fixing it 
console.log(Maths.calculateArea(5));