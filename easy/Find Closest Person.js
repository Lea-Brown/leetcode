/**
 * 3516. Find Closest Person
 * easy
 * https://leetcode.com/problems/find-closest-person/description/
 *
 * Finds which of two numbers is closest to a target value.
 *
 * @param {number} x - The first candidate number.
 * @param {number} y - The second candidate number.
 * @param {number} z - The target number to compare against.
 * @returns {number} `1` if `x` is closer to `z`, `2` if `y` is closer, or `0` if equidistant.
 *
 * @example
 * findClosest(1, 3, 2); // returns 1 (x is closer)
 * findClosest(1, 3, 4); // returns 2 (y is closer)
 * findClosest(1, 3, 2); // returns 0 (equidistant)
 */

function findClosest(x, y, z) {
  let p1 = Math.abs(x - z);
  let p2 = Math.abs(y - z);
  return p1 < p2 ? 1 : p1 > p2 ? 2 : 0;
}
