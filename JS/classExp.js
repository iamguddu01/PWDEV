class Person {
    constructor(name, age) {
        this.name = name;       // datamembers/properties
        this.age = age;
    }

    greet() {                   // member functions / behavior
        console.log("Hello: ", this.name, " i am ", this.age, " old!");
    }
}


const p1 = new Person("Anurag", 25);
const p2 = new Person("Govind", 24);
const p3 = new Person("Pratyaksh", 22);

p1.greet();
p2.greet();
p3.greet();


Seller
Buyer
Product
Order
Payment


class Seller {
    constructor(name, companyName, gstNum, state, category) {
        this.name = name;
        this.companyName = companyName;
        this.gstNum = gstNum;
        this.state = state;
        this.category = category;
    }

    addProduct() {

    }

    updateProduct() {

    }

    addOffers() {

    }

    runMarketingCampaign() {
        
    }
}