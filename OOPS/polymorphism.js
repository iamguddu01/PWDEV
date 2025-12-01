class Payment{
    pay(){ // Public
        console.log("Generic Payment Method!!");
    }
}
class PayTm extends Payment{
    pay(){ // Own method 
        console.log("PayTm payment method!!");
    }
}
class GooglePay extends Payment{
    pay(){ // Own method
        console.log("Gpay payment method!!");
    }
}
class BHIMPAY extends Payment{

}
const ptm1 = new PayTm();
ptm1.pay(); // This instance will check first that the method belong to its class or not if yes then it will execute its own method else it will execute parents method
const gpay1 = new GooglePay();
gpay1.pay();
const bhimp = new BHIMPAY();
bhimp.pay();


//=========================================================//

class Notification{
    send(){
        console.log("General send function");
    }
}
class EMail extends Notification{
    send(){
        console.log("Sending Email");
    }
}
class SMS extends Notification{
    send(){
        console.log("Sending SMS");
    }
}
class Whatsapp extends Notification{
    
}

const email = new EMail();
email.send();
const sms = new SMS();
sms.send();
const whtsp = new Whatsapp();
whtsp.send();

//=========================================================//

class Shipping{
    claculate(){
        return 0;
    }
}
class StandardShipping extends Shipping{
    claculate(){
        return 50;
    }
}
class ExpressShipping extends Shipping{
    claculate(){
        return 150;
    }
}
let stdShip = new StandardShipping();
console.log(stdShip.claculate());
let expShip = new ExpressShipping();
console.log(expShip.claculate());
let ship = new Shipping();
console.log(ship.claculate());