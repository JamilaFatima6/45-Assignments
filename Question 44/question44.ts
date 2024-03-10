function makeSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please select some items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("\n");
}


makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon');
makeSandwich('peanut butter', 'jelly');