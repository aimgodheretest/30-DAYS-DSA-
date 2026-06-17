// 1. Print numbers from 1 to 10 using a loop.
function numbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// numbers();

// 2. Print numbers from 10 to 1 in reverse order.
function nums() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
// nums();

// 3. Print all even numbers from 1 to 50.
function printEven() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// printEven();

// 4. Print all odd numbers from 1 to 50.
function printOdd() {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
// printOdd();

// 5. Print the multiplication table of a number entered by the user.
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * num);
  }
}
// printTable(15);

// 6. Find the sum of first N natural numbers.
function sumOfNaturalNum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
// console.log(sumOfNaturalNum(3));

// 7. Find the factorial of a number.
function printFact(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(printFact(4));

// 8. Count digits in a number.
function countDigit(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
// console.log(countDigit(421));

// 9. Reverse a number.
function reverseNum(n) {
  let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);

  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev * sign;
}
console.log(reverseNum(432));
