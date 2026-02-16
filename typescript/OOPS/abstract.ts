// Abstraction in TypeScript
// Abstract classes and methods

abstract class Payment {
    abstract processPayment(amount: number): void; // Abstract method, must be implemented by subclasses
    printReceipt(amount: number): void {
        console.log(`Payment of $${amount} processed. Receipt printed.`);
    }
}