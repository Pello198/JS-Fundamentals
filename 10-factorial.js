// 10-factorial.js

const n = parseInt(process.argv[2]);

function factorial(x) {
  if (isNaN(x) || x <= 0) return 1; // base case for NaN or 0 or negative
  return x * factorial(x - 1);       // recursive call
}

console.log(factorial(n));
