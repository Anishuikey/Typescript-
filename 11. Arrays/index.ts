// There are two types of Arrays in typeScript

// 1. Brackets Array
const numbers: number[] = [1, 2, 3, 4, 5, 6]; //👉 So, here the numbers is as a variable and number[] is a type...

console.log(numbers);
console.log(numbers[4]);

// Let's take one more example
const letters: string[] = ["a", "b", "c", "d", "e"];
console.log(letters);

// 2. Arrays<type>Notation
const names: Array<string> = ["Abhi", "Hari", "Aayush", "lokendra", "Arpit"];
console.log(names);

// Let's take one more example
const groceries: Array<string> = ["milk", "bread", "tomato", "potato"];
console.log(groceries);

// Push items in array
const items: string[] = ["Monitor", "Keyboard"];
items.push("Mouse");
console.log(items);
