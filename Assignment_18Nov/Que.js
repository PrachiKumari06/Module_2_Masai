const numbers = [1, 2, 3];
const total = numbers.reduce((acc, val) => acc + val, 0);
console.log(total);


const values = [2, 3, 4];
const result = values.map(x => x + 1).reduce((a, b) => a * b);
console.log(result);

const result1 = [5, 10, 15].reduce((acc, val) => acc + val, 5);
console.log(result1);
