/* 242. Valid Anagram

https://leetcode.com/problems/valid-anagram/description/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const test = [...new Set(s)];
  s = [...s];
  t = [...t];
  for (let i = 0; i < test.length; i++) {
    if (
      s.filter((e) => e == test[i]).length !=
      t.filter((a) => a == test[i]).length
    )
      return false; // very slow
  }
  return true;
}
