/**
 * 1160. Find Words That Can Be Formed by Characters
 * easy
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
 *
 * Counts the total length of all words that can be formed using characters from `chars`.
 * Each character in `chars` can only be used as many times as it appears.
 *
 * @param {string[]} words - Array of words to check against the character set.
 * @param {string} chars - String of available characters.
 * @returns {number} The total length of all valid words.
 *
 * @example
 * countCharacters(["cat","bt","hat","tree"], "atach") // returns 6 ("cat" + "hat")
 * countCharacters(["hello","world","leetcode"], "welldonehoneyr") // returns 10 ("hello" + "world")
 */

function countCharacters(words, chars) {
  const map = {};
  for (const letter of chars) {
    map[letter] = (map[letter] || 0) + 1;
  }

  let count = 0;
  for (const word of words) {
    const copy = { ...map };
    let tempCount = 0;

    for (const letter of word) {
      if (!copy[letter]) {
        tempCount = 0;
        break;
      }
      tempCount++;
      copy[letter]--;
    }
    count += tempCount;
  }
  return count;
}
