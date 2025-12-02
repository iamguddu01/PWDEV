class Car{
    #engineON = false;
    start(){
        this.#checkAndStartEngine();
        console.log("Car started!");
    }

    #checkAndStartEngine(){
        this.#engineON = true;
        console.log("Engine OK");
    }
}
const maruti = new Car();
maruti.start();1