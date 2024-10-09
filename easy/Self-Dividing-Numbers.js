/* 728. Self Dividing Numbers

https://leetcode.com/problems/self-dividing-numbers/

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

Example 1:
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Example 2:
Input: left = 47, right = 85
Output: [48,55,66,77]
 
Constraints:
1 <= left <= right <= 104
*/

function selfDividingNumbers(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    const numStr = i.toString().split("");
    let isDividing = true;
    for (let a = 0; a < numStr.length; a++) {
      if (isDividing == false) break;
      if (i % +numStr[a] != 0) isDividing = false;
    }
    if (isDividing == true) result.push(i);
  }
  return result;
}
