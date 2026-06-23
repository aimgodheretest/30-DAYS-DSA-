function sum(n) {
  // base condition
  if (n === 1) return 1;

  return n + sum(n - 1);
}

const n = 5;
console.log(sum(n));
