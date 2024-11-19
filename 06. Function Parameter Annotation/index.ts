// Regular function
function addOne(num: number) {
    return  num + 1;
}

const result = addOne(3);
console.log(result);  // 👉 4

// Arrow Function
const double = (x: number, y: number) => {
    return x * y;
}

const res = double(2,4);
console.log(res) // 👉 8