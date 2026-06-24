/*
1.Given A String check whether on reversal it is the same or not.
Return True if yes otherwise return False.[LEETCODE-125]
Example 1:
Input:- word = "madam"
Output : true
*/
function validate(s) {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return s === rev;
}
// console.log(validate("abba"));

/*
2.Maximum Number of Words[LEETCODE 2114]
*/
function maxNoWords(s) {
  let maxWord = 0;
  for (let i = 0; i < s.length; i++) {
    let wordCount = s[i].split(" ").length;

    maxWord = Math.max(maxWord, wordCount);
  }
  return maxWord;
}
// console.log(
//   maxNoWords(["please wait", "continue to fight", "continue to win"]),
// );
/*

3.Minimum requirement for palindrome
*/
function pallindrome(s) {
  let n = s.length;
  function ispallindrome(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (ispallindrome(0, i)) {
      return n - 1 - i;
    }
  }
  return n - 1;
}
// console.log(pallindrome("aa"));

/*
4.Failed Students at end
*/
function failedStudentAtEnd(nums) {
  let pass = [];
  let fail = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      pass.push(nums[i]);
    } else {
      fail.push(nums[i]);
    }
  }
  return pass.concat(fail);
}
// console.log(failedStudentAtEnd([-5, 7, -3, -4, 9, 10, -1, 11]));
