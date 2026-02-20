// Discriminated Unions => TypeScript's way of creating a union type that can be narrowed down based on a common property.

type Success = {
    status: "success";
    data: string;
}

type Errors = {
    status: "error";
    message: string;
}

type ApiResponse = Success | Errors;

function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log("Data received:", response.data);
    } else {
        console.error("Error occurred:", response.message);
    }
}


type Payment = {
    type: "credit" | "debit";
    amount: number;
} | {
    type: "upi";
    upiId: string;
    amount: number;
} | {
    type: "cash";
    amount: number;
}

function processPayment(payment: Payment) {
    switch (payment.type) {
        case "credit":
        case "debit":
            console.log(`Processing ${payment.type} payment of amount ${payment.amount}`);
            break;
        case "upi":
            console.log(`Processing UPI payment of amount ${payment.amount} with UPI ID ${payment.upiId}`);
            break;
        case "cash":
            console.log(`Processing cash payment of amount ${payment.amount}`);
            break;
    }
}

const payment1: Payment = { type: "credit", amount: 100 };
const payment2: Payment = { type: "upi", upiId: "user@bank", amount: 200 };
const payment3: Payment = { type: "cash", amount: 50 };

processPayment(payment1);
processPayment(payment2);
processPayment(payment3);


type Action = {
    type: "ADD",
    payload: {
        userId : number;
        userName : string;
    }
} | {
    type: "DELETE",
    payload: {
        userId : number;
    }   
}