// Method Overriding in TypeScript

class Bird {
    fly() {
        console.log("The bird is flying.");
    }
}

class Penguin extends Bird {
    fly() { // Method overriding
        console.log("The penguin cannot fly.");
    }
}

class Sparrow extends Bird {
    fly() { // Method overriding
        console.log("The sparrow is flying.");    // changing the implementation of fly method in Sparrow class
    }
}
const myPenguin = new Penguin();
myPenguin.fly(); // Output: The penguin cannot fly.

const mySparrow = new Sparrow();
mySparrow.fly(); // Output: The sparrow is flying.      

