class Engine{
    start(){
        console.log("Engine started!!");
    }
}
class Car {
    constructor(){
        this.engine = new Engine();
    }
    startCar(){
        this.engine.start();
    }
}
const car = new Car();
car.startCar();
// ================================================================== //

class Address {
    constructor(city, country){
        this.city = city;
        this.country = country;
    }
}
class User {
    constructor(name, age, city, country){
        this.name = name;
        this.age = age;
        this.address = new Address(city, country);
    }
}
const u1 = new User("Govind", 22, "Noida", "India");
console.log(u1.address);

// ===============================================================  //

class Camera{
    takePhoto(){
        console.log("Photo CLicked !!");
    }
}

class GPS{
    locate(){
        console.log("Location Found !!");
    }
}
class Battery{
    charge(){
        console.log("Battey charged !!");
    }
}
class Smartphone{
    constructor(brand, name){
        this.brand = brand;
        this.name = name;
        this.camera = new Camera();
        this.gps = new GPS();
        this.Battery = new Battery();
    }
}
const smp1 = new Smartphone("OPPO", "K12X");
smp1.camera.takePhoto();
smp1.gps.locate();
smp1.Battery.charge();
