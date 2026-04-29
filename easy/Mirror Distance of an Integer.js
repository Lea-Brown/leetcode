/**
 * 3783. Mirror Distance of an Integer
 * easy
 * https://leetcode.com/problems/mirror-distance-of-an-integer/description/
 *
 * Calculates the absolute difference between a number and its reverse.
 *
 * @param {number} n - The number to mirror.
 * @returns {number} The absolute distance between `n` and its digit-reversed counterpart.
 *
 * @example
 * mirrorDistance(123); // 123 - 321 = |-198| = 198
 * mirrorDistance(500); // 500 - 005 = |495| = 495
 * mirrorDistance(121); // 121 - 121 = 0
 */

const mirrorDistance = (n) =>
  Math.abs(n - +n.toString().split("").reverse().join(""));
