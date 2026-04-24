/**
 * 3541. Find Most Frequent Vowel and Consonant
 * easy
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
 *
 * Calculates the sum of the highest frequency vowel and highest frequency
 * consonant in a given string.
 *
 * @param {string} s - The input string to analyse. Expected to contain only lowercase letters.
 * @returns {number} The sum of the maximum vowel frequency and maximum consonant frequency.
 *
 * @example
 * maxFreqSum("successes") // returns 6 (s appears 3 times, u appears 1 time... wait)
 * maxFreqSum("aabbcc")    // returns 4 (a:2, b:2, c:2 → maxVowel=2, maxConst=2)
 * maxFreqSum("aaabbb")    // returns 6 (a:3, b:3)
 */

function maxFreqSum(s) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  const vowels = {};
  const consonant = {};
  let maxVowels = 0;
  let maxConst = 0;
  for (const letter of s) {
    if (vowelSet.has(letter)) {
      vowels[letter] = (vowels[letter] || 0) + 1;
      if (vowels[letter] > maxVowels) maxVowels = vowels[letter];
    } else {
      consonant[letter] = (consonant[letter] || 0) + 1;
      if (consonant[letter] > maxConst) maxConst = consonant[letter];
    }
  }
  return maxVowels + maxConst;
}
