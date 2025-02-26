# JavaScript Design Patterns

This repository showcases my learning journey in design patterns using JavaScript.

## Singleton Pattern

- Ensures only one instance of a class exists.
- Useful in configurations, caching, and managing shared resources.

[View Singleton Pattern Implementation](./creational-singleton-pattern.js)

### Example:
```js
const config1 = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: "rectangle" });
const config2 = ConfigureVals.getConfiguration({ xpoint: 2, ypoint: 4, shape: "circle" });

console.log(config1 === config2); // Output: true
```

## Factory Pattern

- Provides a way to instantiate objects from a common interface without specifying the exact class.
- Useful for managing multiple types of objects with a shared base class.

[View Factory Pattern Implementation](./creational-factory-pattern.js)

### Example:
```js
const stripe = PaymentFactory.getPaymentProcessor('stripe');
stripe.charge(100); // Output: $100 charged using Stripe

const paypal = PaymentFactory.getPaymentProcessor('paypal');
paypal.charge(200); // Output: $200 charged using PayPal
```

## Strategy Pattern

- Defines a family of algorithms and makes them interchangeable.
- Used to select the sorting algorithm at runtime.

[View Strategy Pattern Implementation](./behavioural-strategy-pattern.js)

### Example:
```js
// Using BubbleSort
const bubbleSort = new Sorter(new BubbleSort());
bubbleSort.sort([3, 2, 1]); // Output: Sorting using bubble sort

// Using QuickSort
const quickSort = new Sorter(new QuickSort());
quickSort.sort([3, 2, 1]); // Output: Sorting using quick sort
```

## Observer Pattern

- Allows objects (observers) to receive updates from another object (subject) when its state changes.
- Used in event-driven programming, UI updates, and real-time notifications.

[View Observer Pattern Implementation](./behavioural-observer-pattern.js)

#### Example:
```js
const hallDisplay = new TemperatureDisplay('Hall');
const kitchenDisplay = new TemperatureDisplay('Kitchen');

const weatherStation = new WeatherStation();
weatherStation.addObserver(hallDisplay);
weatherStation.addObserver(kitchenDisplay);

weatherStation.setTemperature(20); // Notifies all observers
```

