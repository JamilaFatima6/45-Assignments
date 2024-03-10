var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of places
var places = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "New York"];
// Print original array
console.log("Original order:");
console.log(places);
// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], places, true).sort());
// Show original order
console.log("\nOriginal order:");
console.log(places);
// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], places, true).sort().reverse());
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
