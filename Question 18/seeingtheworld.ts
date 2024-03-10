// Define the array of places
let places: string[] = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "New York"];

// Print original array
console.log("Original order:");
console.log(places);

// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...places].sort());

// Show original order
console.log("\nOriginal order:");
console.log(places);

// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

// Show original order
console.log("\nOriginal order:");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed order:");
console.log(places);

// Reverse the order again to bring it back to the original order
places.reverse();
console.log("\nBack to original order:");
console.log(places);

// Sort the array in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log(places.sort());

// Sort the array in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(places.sort().reverse());