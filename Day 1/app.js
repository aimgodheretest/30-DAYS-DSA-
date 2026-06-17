//4 Approaches: Odd/Even Check:
//Approach:1 using AND  operator;
function isOddEven(n) {
  if ((n & 1) === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(isOddEven(5));

// Approach 2:USING MODULO OPERATOR %;
function isOddEven2(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(isOddEven2(13));

//Approach 3: USING DIVIDE AND MULTIPLICATION;
function isOddEven3(n) {
  if (Math.floor(n / 2) * 2 === n) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(isOddEven3(10));

//Approach 4: Repeated Subtraction;
function isOddEven4(n) {
  while (n > 1) {
    n = n - 2;
  }
  if (n === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isOddEven4(34));
