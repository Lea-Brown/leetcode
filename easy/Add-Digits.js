/* 258. Add Digits

https://leetcode.com/problems/add-digits/

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0
 
Constraints:
0 <= num <= 231 - 1
 
Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

function addDigits(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((acc, cur) => +acc + +cur, 0);
  }
  return num;
}

// working on recursion
function addDigits(num) {
  if (num < 10) {
    return num;
  } else {
    const newNum = num
      .toString()
      .split("")
      .reduce((acc, add) => +acc + +add, 0);
    return addDigits(newNum);
  }
}
