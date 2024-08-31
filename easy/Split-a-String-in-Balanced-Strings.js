/* 1221. Split a String in Balanced Strings

https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 
Constraints:
2 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.
*/

function balancedStringSplit(s) {
  s = [...s];
  let length = s.length / 2;
  let result = [];
  let cutLength = 2;
  for (let i = 0; i < length; i++) {
    let test = s.slice(0, cutLength);
    const r = test.filter((e) => e == "R").length;
    const l = test.filter((e) => e == "L").length;
    if (r == l && r != 0) {
      result.push(s.splice(0, cutLength));
      cutLength = 2;
    } else {
      cutLength += 2;
    }
  }
  return result.length;
}

// chatGPT refractored

function balancedStringSplit(s) {
  let balance = 0;
  let count = 0;
  for (let char of s) {
    balance += char === "R" ? 1 : -1;
    if (balance === 0) {
      count++;
    }
  }
  return count;
}
