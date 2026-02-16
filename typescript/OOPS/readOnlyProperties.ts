// Read Only properties
class Oreders{
    readonly orderId : number;
    constructor(orderId : number){
        this.orderId = orderId; // Read only property
    }
}
const o1 = new Oreders(3456);
console.log(o1.orderId)
// o1.orderId = 1234; // Can't edit or change bcoz its read only 

