/**
 * 3467. Transform Array by Parity
 * easy
 * https://leetcode.com/problems/transform-array-by-parity/description/
 *
 * Transforms an array of numbers by separating even and odd values,
 * replacing each with 0 or 1 respectively, with zeros preceding ones.
 *
 * @param {number[]} nums - The array of integers to transform.
 * @returns {number[]} A new array of 0s followed by 1s, where each even
 *                     number is replaced with 0 and each odd number with 1.
 *
 * @example
 * transformArray([1, 2, 3, 4]);
 * // Returns: [0, 0, 1, 1]
 *
 * @example
 * transformArray([7, 8, 3]);
 * // Returns: [0, 1, 1]
 */

function transformArray(nums) {
  let one = [];
  let zero = [];
  for (const each of nums) {
    each % 2 === 0 ? zero.push(0) : one.push(1);
  }
  return [...zero, ...one];
}
