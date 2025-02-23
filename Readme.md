# JavaScript Design Patterns

This repository showcases my learning journey in design patterns using JavaScript.

## Singleton Pattern

- Ensures only one instance of a class exists.
- Useful in configurations, caching, and managing shared resources.

### Example:
```js
const config1 = ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: "rectangle" });
const config2 = ConfigureVals.getConfiguration({ xpoint: 2, ypoint: 4, shape: "circle" });

console.log(config1 === config2); // true
```