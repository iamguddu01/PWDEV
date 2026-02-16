// polymoorphism : one name many forms
// Method overloading : same method name with different parameters

abstract class Animal{
    abstract eat(): void; // Abstract method, must be implemented by subclasses
}
class Dog extends Animal{
    eat(){
        console.log("Dog is eating")
    }
}
class Cat extends Animal{
    eat(){
        console.log("Cat is eating")
    }
}
function feedAnimal(animal : Animal){
    animal.eat() // Polymorphic behavior: the eat method will behave differently based on the actual type of animal passed (Dog or Cat)
}

const dog = new Dog();
const cat = new Cat();

feedAnimal(dog); // output: Dog is eating
feedAnimal(cat); // output: Cat is eating