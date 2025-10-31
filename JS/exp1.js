// function Person(name, age) {        // function constructor
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(this.name + " : " + this.age);
//     }
// }

// const p1 = new Person("vandana", 22);

// const p2 = new Person("ansh", 23);

// console.log(p1.name + " : " + p1.age);
// p1.greet();


// console.log(p2.name + " : " + p2.age);
// p2.greet();



function Seller(companyName, state, ...category) {
    this.companyName = companyName;
    this.state = state;
    this.category = category;
}

Seller.prototype.runMarketing = function() {
    console.log("Marketing is executed on ", this.category[0]);
};

Seller.prototype.announceSale = function() {
    console.log("Sale of 20% is announced on all the products!");
}

const s1 = new Seller("xyz", "gurgaon", "electronics");
const s2 = new Seller("xyz", "gurgaon", "electronics");
const s3 = new Seller("xyz", "gurgaon", "electronics");
const s4 = new Seller("xyz", "gurgaon", "electronics");

s1.runMarketing();
s2.runMarketing();

s1.announceSale();
s2.announceSale();