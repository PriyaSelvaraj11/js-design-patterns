// Abstract Strategy class
class SortStrategy {
    sort() {
      throw new Error('This is an abstract class'); // Method to be implemented by concrete classes
    }
  }
  
// BubbleSort strategy
class BubbleSort extends SortStrategy {
    sort(data) {
      console.log('Sorting using bubble sort');
      return data; // Bubble sort logic
    }
  }
  
// QuickSort strategy
class QuickSort extends SortStrategy {
    sort(data) {
      console.log('Sorting using quick sort');
      return data; // Quick sort logic
    }
  }
  
// Context class that uses a sorting strategy
class Sorter {
    constructor(strategy) {
      this.sorter = strategy; // Set sorting strategy
    }
    
    sort(data) {
      return this.sorter.sort(data); // Execute the sort method
    }
  }
  
// Sample usage:

// Using BubbleSort
const bubbleSort = new Sorter(new BubbleSort());
bubbleSort.sort([3, 2, 1]); // Output: Sorting using bubble sort
  
// Using QuickSort
const quickSort = new Sorter(new QuickSort());
quickSort.sort([3, 2, 1]); // Output: Sorting using quick sort
