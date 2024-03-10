function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and hello  "${message}".`);
}

make_shirt();

make_shirt('Medium');

// Call the function to make a shirt of any size with a different message
make_shirt('Small', 'Hello');