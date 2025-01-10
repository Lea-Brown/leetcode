/* 504. Base 7

https://leetcode.com/problems/base-7/

Given an integer num, return a string of its base 7 representation.

Example 1:
Input: num = 100
Output: "202"

Example 2:
Input: num = -7
Output: "-10"
 
Constraints:
-107 <= num <= 107
*/

// ChatGPT
function convertToBase7(num: number): string {
  if (num < 0) {
    return "-" + convertToBase7(-num);
  }
  if (num < 7) {
    return num.toString();
  }
  let result = "";
  while (num >= 7) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }
  result = num + result;
  return result;
}
