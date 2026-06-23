//ARRAYS:-
/*
1.Storing Elements in Array
Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array and return the array.
 */
function printArr(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(printArr(5));

/*
2.Store Prime numbers in an array
Write a program to store first n prime numbers in an array . After storing return the array.
Input:-
n=5
Output:- Return the output in the form of an array.[2,3,5,7,11]
 */
function printOddArr(n) {
  let arr = [];
  let x = 2;
  while (arr.length < n) {
    let counter = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        counter++;
      }
    }
    if (counter === 2) {
      arr.push(x);
    }
    x++;
  }
  return arr;
}
// console.log(printOddArr(5));

/*
3.Given an array find the maximum in it and return it
Example:-
Input:-
Arr=[5, 4, 7, 2, 6]
Ouput:- 7
 */
function max(arr) {
  let maximum = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}
// console.log(max([1000,200,45,10141,1300]))

/*
4.Write the function to find the minimum in the array and return it
Input :- Array and the length of the array
[5,6,2,9,-2] , 5
Output: -2
 */
function minimum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(minimum([10, 20, 45, -100, 10]));
/*
5.write the code to print all the subarrays possible.
 */
function printSubArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let str = "";
      for (let k = i; k <= j; k++) {
        str += arr[k];
      }
      console.log(str);
    }
  }
}
// printSubArr([1, 2, 3, 4, 5]);
/*
6.Given an array find the maximum sum subarray. Return the maximum sum of the subarray.
 */
function maxSubArr(arr) {
  let maxSumSubArr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let prevSum = 0;
    for (let j = i; j < arr.length; j++) {
      prevSum += arr[j];
      if (prevSum > maxSumSubArr) {
        maxSumSubArr = prevSum;
      }
    }
  }
  return maxSumSubArr;
}
// console.log(maxSubArr([5, 2, -4, -5, 3, -1, 2, 3, 1]));

/*
7.Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
*/
function sumOfOddLengthSubArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      for (k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
}
// console.log(sumOfOddLengthSubArr([1, 4, 2, 5, 3]));

//DYNAMIC ARRAYS:-
/*
1.You have been given an array your task is to reverse the array and return the new reversed array.
Example 1:-
Input:-
[1,2,3,4,5]
Output:-
[5,4,3,2,1]
*/
function revArr(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
// console.log(revArr([1, 2, 3, 4, 5]));

/*
2.Given 2 Arrays concatenate both of them and return the final resultant array.
Arr1 will be concatenated first followed by Arr2.
Example 1:-
Input:-
Arr1=[1,2,3,4,5]
Arr2=[1,2,3]
Ouput:-
[1,2,3,4,5,1,2,3]
*/
function arrConcate(arr1, arr2) {
  return arr1.concat(arr2);
}
// console.log(arrConcate([1, 2, 3, 4, 5], [10, 1, 15, 20, 25]));
/*
3.Write a program to extract all the odd numbers that are present in the given array.
Store all these odd numbers in the new array and return it.
Example 1:-
Input:-
[1,2,3,4,5]
Output:-
[1,3,5]
*/
function extractOddNums(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(extractOddNums([1, 2, 3, 4, 5]));
// console.log(extractOddNums([1, 7, 2, 11, 5, 8, 10, 13]));

/*
4.You are given an array Containing n-1 distinct numbers from range [1, n].
There is one element missing from the range[1,n] in the array. Find that missing Number and return it.
Solve it without using any extra array.
Example 1:
Input: nums = [3,4,1]
Output: 2
Explanation: n = 4 since there are 3 numbers, so all numbers are in the range [1,4]. 2 is the missing number in the range since it does not appear in nums.
*/
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - sum;
}
// console.log(findMissingNumber([3, 4, 1]));
// console.log(findMissingNumber([2, 1]));
// console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1]));
/*
5.Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Return the running sum of nums.
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
function runningSum(arr) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
}
// console.log(runningSum([3, 1, 2, 10, 1]));

//2-D ARRAYS:-
/*
1.Maximum in 2D array
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/
function findRichestCustomer(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// console.log(
//   findRichestCustomer([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ]),
// );

/*2.Minimum in a 2D array
Write a program to find the minimum element in a 2D Array.
Example 1:
Input: arr = [[1,2,3],[5,-2,7]]
Output: -2
*/
function findMinElem(arr) {
  let minimum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      minimum = Math.min(minimum, arr[i][j]);
    }
  }
  return minimum;
}
// console.log(
//   findMinElem([
//     [10, 5],
//     [7, 8],
//     [3, 5],
//   ]),
// );
/*3.Transpose a matrix
Given a 2D integer array matrix, return the transpose of the matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
*/
function transposeMatrix(matrix) {
  const result = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0),
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
// console.log(
//   transposeMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );
