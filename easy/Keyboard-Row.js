/* 500. Keyboard Row

https://leetcode.com/problems/keyboard-row/

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Explanation:
Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

function findWords(words) {
  const row1 = "qwertyuiopQWERTYUIOP";
  const row2 = "asdfghjklASDFGHJKL";
  const row3 = "zxcvbnmZXCVBNM";
  let result = [];
  for (const each of words) {
    let word = each;
    let row;
    row1.includes(each[0])
      ? (row = row1)
      : row2.includes(each[0])
      ? (row = row2)
      : (row = row3);
    for (const letter of each) {
      if (!row.includes(letter)) {
        word = "";
        break;
      }
    }
    if (word.length > 0) result.push(word);
  }
  return result;
}
