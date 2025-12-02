// Interface has no support in JS its justt a mimic
class PaymentInterface{
    processPayment(amount){
        throw "Not Implemented!"
    }

    refund(id){
        throw "Not Implemented!"
    }
}

class Razorpay extends PaymentInterface{
    // Method overriding
    processPayment(amount){
        console.log("Razorpay pay :", amount);
    }
    refund(id){
        console.log("Razorpay refund : ", id);
    }
}
// const rp = new Razorpay();
// rp.processPayment(1000);
// rp.refund(7654857)

// =============================================================================//

class NotificationInterface{
    send(message){
        throw "Must be implemented !!"
    }

}
class Email extends NotificationInterface{
    send(message){
        console.log("Email Send : ", message);
    }
}
class SMSnotification extends NotificationInterface{
    send(message){
        console.log("SMS sent : ", message);
    }
}

let mail = new Email();
mail.send("GAYA LALA");
let sms = new SMSnotification();
sms.send("GAYA LALA")