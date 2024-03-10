function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please select some items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with:");
        items.forEach(function (item) {
            console.log("- " + item);
        });
    }
    console.log("\n");
}
// Call the function with different numbers of arguments
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon');
makeSandwich('peanut butter', 'jelly');
