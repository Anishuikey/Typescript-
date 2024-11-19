// Regular Function 
function double1(x: number): number {
    return x * x;
}

const res = double1(2);
console.log(res) //👉 4


// Arrow Function 
const double2 = (x: number): number => {
    return x * x;
}
const result = double2(3);
console.log(result) //👉 9