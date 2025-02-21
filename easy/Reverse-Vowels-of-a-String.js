/* 345. Reverse Vowels of a String

https://leetcode.com/problems/reverse-vowels-of-a-string/

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let newVowelOrder = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (vowels.includes(s[i])) newVowelOrder.push(s[i]);
  }
  let arr = [...s];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = newVowelOrder[index];
      index++;
    }
  }
  return arr.join("");
}
