/* Easy
Ransom Note

https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

var canConstruct = function (ransomNote, magazine) {
  let result = [];
  let rn = ransomNote.split("").sort();
  let m = magazine.split("").sort();
  for (let i = 0; i < ransomNote.length; i++) {
    if (m.includes(rn[i])) {
      result.push(m.find((x) => x == rn[i]));
      m.splice(
        m.findIndex((x) => x == rn[i]),
        1
      );
    }
  }
  return result.length == ransomNote.length;
};

// working on hash maps
function canConstruct(ransomNote, magazine) {
  const obj = {};
  const length = Math.max(ransomNote.length, magazine.length);
  for (let i = 0; i < length; i++) {
    obj[ransomNote[i]] = (obj[ransomNote[i]] || 0) + 1;
    obj[magazine[i]] = (obj[magazine[i]] || 0) - 1;
  }
  const set = new Set(ransomNote);
  for (const letter of set) {
    if (obj[letter] > 0) return false;
  }
  return true;
}
