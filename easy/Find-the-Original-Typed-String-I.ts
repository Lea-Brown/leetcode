/* 3330. Find the Original Typed String I

https://leetcode.com/problems/find-the-original-typed-string-i/

Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

You are given a string word, which represents the final output displayed on Alice's screen.

Return the total number of possible original strings that Alice might have intended to type.

Example 1:
Input: word = "abbcccc"
Output: 5
Explanation:
The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and "abcccc".

Example 2:
Input: word = "abcd"
Output: 1
Explanation:
The only possible string is "abcd".

Example 3:
Input: word = "aaaa"
Output: 4

Constraints:
1 <= word.length <= 100
word consists only of lowercase English letters.
*/

function possibleStringCount(word: string): number {
  let repeatedLetters: number = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) repeatedLetters++;
  }
  return repeatedLetters;
}
