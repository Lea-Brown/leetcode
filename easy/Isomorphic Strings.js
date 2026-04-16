/**
 * 205. Isomorphic Strings
 * easy
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * Determines whether two strings are isomorphic.
 * Two strings are isomorphic if the characters in `s` can be replaced to get `t`,
 * with a one-to-one mapping between characters and preserving order.
 *
 * @param {string} s - The source string.
 * @param {string} t - The target string.
 * @returns {boolean} Returns `true` if the strings are isomorphic, otherwise `false`.
 *
 * @example
 * // true: 'a' -> 'x', 'b' -> 'y'
 * isIsomorphic("ab", "xy");
 *
 * @example
 * // false: 'a' cannot map to both 'x' and 'y'
 * isIsomorphic("aa", "xy");
 *
 * @example
 * // true: 'e' -> 'a', 'g' -> 'd'
 * isIsomorphic("egg", "add");
 */

function isIsomorphic(s, t) {
  const setS = [...new Set(s)];
  const setT = [...new Set(t)];
  if (setS.length !== setT.length) return false;

  let obj = {};
  for (let i = 0; i < setS.length; i++) {
    obj[setS[i]] = setT[i];
  }

  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(obj[s[i]]);
  }

  return result.join("") == t;
}
