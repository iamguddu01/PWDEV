// console.log(this);

// function func() {
//     console.log(this);
// }

// func();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     printInfo() {
//         console.log(this);
//     }
// }


// const p1 = new Person("Anurag");
// p1.printInfo();

function Person(name) {
    this.name = name;

    console.log(this);
}

const Person1 = (name) => {
    this.name = name;

    console.log(this);
}

const p1 = new Person("Govind");
console.log(p1.name);

Person("Govind");