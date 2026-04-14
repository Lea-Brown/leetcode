/**
 * 217. Contains Duplicate
 * easy
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * Checks whether an array contains any duplicate values.
 *
 * Iterates through the array and uses a Set to track seen values.
 * If a value is encountered more than once, the function returns true.
 *
 * @param {Array<*>} nums - The array of values to check for duplicates.
 * @returns {boolean} Returns true if any duplicate exists, otherwise false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]);
 * // false
 *
 * @example
 * containsDuplicate([1, 2, 3, 1]);
 * // true
 */

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// Might be slightly quicker with early exit?
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
