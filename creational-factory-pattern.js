// Base class for all payment processors
class PaymentProcessor {
    charge(amount) {
        console.log(`$${amount} charged using ${this.name}`);
    }
}

// Stripe payment processor implementation
class Stripe extends PaymentProcessor {
    constructor() {
        super();
        this.name = 'Stripe';
    }
}

// PayPal payment processor implementation
class PayPal extends PaymentProcessor {
    constructor() {
        super();
        this.name = 'PayPal';
    }
}

// RazorPay payment processor implementation
class RazorPay extends PaymentProcessor {
    constructor() {
        super();
        this.name = 'RazorPay';
    }
}

// Factory class to create instances of payment processors
class PaymentFactory {
    static getPaymentProcessor(type) {
        switch (type.toLowerCase()) {
            case 'stripe':
                return new Stripe();
            case 'paypal':
                return new PayPal();
            case 'razorpay':
                return new RazorPay();
            default:
                throw new Error('Payment processor not supported');
        }
    }
}

// Sample usage:

const stripe = PaymentFactory.getPaymentProcessor('stripe');
stripe.charge(100); // Output: $100 charged using Stripe

const paypal = PaymentFactory.getPaymentProcessor('paypal');
paypal.charge(200); // Output: $200 charged using PayPal
