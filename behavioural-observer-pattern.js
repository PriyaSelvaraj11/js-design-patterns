// Subject class
class WeatherStation {
    constructor() {
        this.temperature = 0;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    setTemperature(temp) {
        this.temperature = temp;
        this.notifyObservers();
    }
}

// Observer class
class TemperatureDisplay {
    constructor(name) {
        this.name = name;
    }
    update(temperature) {
        console.log(`Temperature is now: ${temperature} at ${this.name}`);
    }
}

// Sample usage

const hallDisplay = new TemperatureDisplay('Hall');
const kitchenDisplay = new TemperatureDisplay('Kitchen');

const weatherStation = new WeatherStation();
weatherStation.addObserver(hallDisplay);
weatherStation.addObserver(kitchenDisplay);

weatherStation.setTemperature(20);

// Output:
// Temperature is now: 20 at Hall
// Temperature is now: 20 at Kitchen