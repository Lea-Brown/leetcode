/**
 * 290. Word Pattern
 * easy
 * https://leetcode.com/problems/word-pattern/description/
 *
 * Determines whether a string of words follows the same pattern as a given pattern string.
 * Each unique character in the pattern maps to exactly one unique word in the string.
 *
 * @param {string} pattern - A string of characters representing the pattern (e.g. "abba")
 * @param {string} s - A space-separated string of words to match against the pattern (e.g. "dog cat cat dog")
 * @returns {boolean} True if the words follow the pattern, false otherwise
 *
 * @example
 * wordPattern("abba", "dog cat cat dog") // true
 * wordPattern("abba", "dog cat cat fish") // false
 * wordPattern("aaaa", "dog cat cat dog") // false
 */

function wordPattern(pattern, s) {
  const chars = new Set(pattern);
  const words = new Set(s.split(" "));
  if (chars.size !== words.size) return false;

  const map = {};
  const wordIter = words.values();
  for (const char of chars) {
    map[char] = wordIter.next().value;
  }

  const mapped = [];
  for (const char of pattern) {
    mapped.push(map[char]);
  }
  return mapped.join(" ") === s;
}
