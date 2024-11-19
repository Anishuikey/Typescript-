function greet(person: string = "Anonymous") {
    return `Hello ${person}`;
}

const consequence = greet('Anish');
console.log(consequence); // 👉 Hello Anonymous