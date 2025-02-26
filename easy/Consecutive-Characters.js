/* 1446. Consecutive Characters

https://leetcode.com/problems/consecutive-characters/

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 
Constraints:
1 <= s.length <= 500
s consists of only lowercase English letters.
*/

function maxPower(s) {
  let result = 0;
  let count = 0;
  let currLetter = s[0];
  for (const each of s) {
    if (each === currLetter) {
      count++;
      if (count > result) result = count;
    } else {
      currLetter = each;
      count = 1;
    }
  }
  return result;
}
