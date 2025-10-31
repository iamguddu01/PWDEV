// // function Person(name, age) {        // function constructor
// //     this.name = name;
// //     this.age = age;
// // }

// // const p1 = new Person("vandana", 22);
// // const p2 = new Person("ansh", 23);

// // console.log("My name is ", p1.name, " and my age is ", p1.age);
// // console.log("My name is ", p2.name, " and my age is ", p2.age);


// function Seller(companyName, state, ...category) {
//     this.companyName = companyName;
//     this.state = state;
//     this.category = category;

//     this.runMarketing = function() {
//         console.log("Marketing is executed on ", category[0]);
//     }

//     this.announceSale = function() {
//         console.log("Sale of 20% is announced on all the products!");
//     }
// }

// // const seller1 = new Seller("xyz", "gurgaon", "electronics", "clothing");
// // console.log(seller1.companyName + " : " + seller1.state + " : " + seller1.category);
// // seller1.runMarketing();


// let sellers = [
//     new Seller("xyz", "gurgaon", "electronics", "clothing"), 
//     new Seller("abc", "ahmedabad", "electronics", "footwear")
// ];

// console.log(sellers[0].companyName + " : " + sellers[0].category);
// console.log(sellers[1].companyName);


console.log(this);

function Seller(companyName, state, ...category) {
    this.companyName = companyName;
    this.state = state;
    this.category = category;

    this.runMarketing = function() {
        console.log("Marketing is executed on ", category[0]);
    }

    this.announceSale = function() {
        console.log("Sale of 20% is announced on all the products!");
    }
}

const s1 = new Seller("xyz", "gurgaon", "electronics");

console.log(s1);