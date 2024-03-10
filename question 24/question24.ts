let string1 = "apple";
let string2 = "banana";
let number1 = 10;
let number2 = 5;
let array = ["apple", "banana", "orange"];
console.log("Is string1 equal to 'apple'? I predict True.");
console.log(string1 === 'apple'); 

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2); 


console.log("Is string1 equal to 'APPLE' after converting to lowercase? I predict True.");
console.log(string1.toLowerCase() === 'apple'); 


console.log("Is number1 equal to 10? I predict True.");
console.log(number1 === 10); 

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2); 

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2); 

console.log("Is number2 less than number1? I predict True.");
console.log(number2 < number1); 

console.log("Is number1 greater than or equal to number2? I predict True.");
console.log(number1 >= number2); 

console.log("Is number2 less than or equal to number1? I predict True.");
console.log(number2 <= number1); 


console.log("Is string1 equal to 'apple' and number1 equal to 10? I predict True.");
console.log(string1 === 'apple' && number1 === 10); 

console.log("Is string1 equal to 'banana' or number1 equal to 5? I predict True.");
console.log(string1 === 'banana' || number1 === 5); 


console.log("Is 'apple' in the array? I predict True.");
console.log(array.includes('apple')); 


console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));