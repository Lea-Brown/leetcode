/* 1941. Check if All Characters Have Equal Number of Occurrences

https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

Example 1:
Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:
Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 
Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.
*/

function areOccurrencesEqual(s) {
  let count = [...s].filter((e) => e == s[0]).length;
  let unique = [...new Set(s)];
  for (let i = 0; i < unique.length; i++) {
    if (count != [...s].filter((e) => e == unique[i]).length) return false;
  }
  return true;
}

// chatGPT refractored
function areOccurrencesEqual(s) {
  const charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const firstCount = charCount[s[0]];
  return Object.values(charCount).every((count) => count === firstCount);
}
