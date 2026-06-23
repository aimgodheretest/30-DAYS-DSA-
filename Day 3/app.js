//FUNCTION PRACTICE;
//1.Add Two Integers[Leetcode-2235]
function sum(x, y) {
  return x + y;
}
// console.log(sum(-4, -5));
//2.Subtract the Product and Sum of Digits of an Integer[Leetcode-1281]
function subtractProductAndSum(n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    product *= lastDigit;
    sum += lastDigit;
    n = Math.floor(n / 10);
  }
  return product - sum;
}
// console.log(subtractProductAndSum(4421));

//3.Number of Steps to Reduce a Number to Zero[Leetcode-1342]
function numberOfSteps(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n = n - 1;
    }
    count++;
  }
  return count;
}
// console.log(numberOfSteps(10));

//RECURSION PRACTICE
//1.Sum of Digits of a Number
function sumOfDigit(n) {
  //base case
  if (n === 0) return 0;
  //recursive logic
  return (n % 10) + sumOfDigit(Math.floor(n / 10));
}
// console.log(sumOfDigit(1234))

//2.Power of Two (LeetCode 231)
function isPowOfTwo(n) {
  //base case
  if (n === 1) return true;
  if (n <= 0 || n % 2 !== 0) return false;

  //recursive logic
  return isPowOfTwo(Math.floor(n / 2));
}
// console.log(isPowOfTwo(3));

//3.Fibonacci Number (LeetCode 509)
function isFab(n) {
  //base case
  if (n <= 1) return n;

  //recursive call
  return isFab(n - 1) + isFab(n - 2);
}
// console.log(isFab(5));
