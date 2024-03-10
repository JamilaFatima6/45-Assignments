function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and hello : \"").concat(message, "\"."));
}
make_shirt();
make_shirt('Medium');
// Call the function to make a shirt of any size with a different message
make_shirt('Small', 'Hello');
