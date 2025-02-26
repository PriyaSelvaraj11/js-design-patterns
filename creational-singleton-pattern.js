class ConfigureVals {
    constructor(xpoint = 0, ypoint = 0, shape = null) {
        // If an instance already exists, return that instance instead of creating a new one
        if (ConfigureVals.instance) {
            return ConfigureVals.instance;
        }

        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.shape = shape;

        ConfigureVals.instance = this;
    }

    // Static method to create or return the existing instance
    static getConfiguration({ xpoint = 0, ypoint = 0, shape = null }) {
        if (!ConfigureVals.instance) {
            ConfigureVals.instance = new ConfigureVals(xpoint, ypoint, shape);
        }
        return ConfigureVals.instance;
    }
}

// Sample usage:

// First call - Creates a new instance
const config1 = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: "rectangle" });
console.log(config1); 
// Output: ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }

// Second call - Returns the existing instance (singleton behavior)
const config2 = ConfigureVals.getConfiguration({ xpoint: 2, ypoint: 4, shape: "circle" });
console.log(config2); 
// Output: ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }

// Verify that both references point to the same instance
console.log(config1 === config2); // true
