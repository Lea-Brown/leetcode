/* 387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string/description/

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 
Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
*/

function firstUniqChar(s) {
  const unique = [...new Set(s)];
  const sArr = [...s];
  for (i = 0; i < unique.length; i++) {
    if (sArr.filter((e) => e == unique[i]).length == 1)
      return sArr.indexOf(unique[i]);
  }
  return -1;
}

// chatGPT for better time complexity

function firstUniqChar(s) {
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
