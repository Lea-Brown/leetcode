/* 1796. Second Largest Digit in a String

https://leetcode.com/problems/second-largest-digit-in-a-string/

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 
Constraints:
1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

function secondHighest(s: string): number {
  let nums: string[] = [];
  const valid: string = "1234567890";
  for (const e of s) {
    if (valid.includes(e)) nums.push(e);
  }
  const result = [...new Set(nums)].sort((a, b) => +b - +a);
  return result.length > 1 ? +result[1] : -1;
}
