class Vehicle {
    plateNumber;
    #chasisNumber;

    constructor(plateNumber, chasisNumber){
        this.plateNumber = plateNumber;
        this.#chasisNumber = chasisNumber;
    }
    drive(){
        console.log("all vehicles can drive");
    }
    getChasis(){
        return this.#chasisNumber;
    }
}


class fourWheeler extends Vehicle{
    noOfAirbags;
    constructor(noOfAirbags, plateNumber, chasisNumber){
        super(plateNumber,chasisNumber) // Super will call the constructor of the vehicle class or creates the instance of the extended class 
        this.noOfAirbags = noOfAirbags;
        this.seats = 6;
    }
    wearBelt() {
        console.log("Safe now");
    }
}

const creta = new fourWheeler(4, "UP16EE9865", "FDJ9687FGJKJ");
console.log("Own properties : " + creta.noOfAirbags + " : " + creta.seats);
console.log("Parent properties : " + creta.plateNumber + " : " + creta.chasisNumber);
console.log(creta.wearBelt());
console.log(creta.drive());
console.log(creta.getChasis());