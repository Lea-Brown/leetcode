/**
 * 3898. Find the Degree of Each Vertex
 * easy
 * https://leetcode.com/problems/find-the-degree-of-each-vertex/description/
 *
 * Calculates the degree of each row in an adjacency matrix.
 * The degree is the number of edges (1s) present in each row.
 *
 * @param {number[][]} matrix - A 2D adjacency matrix containing 0s and 1s.
 * @returns {number[]} An array where each element represents the degree of the corresponding row.
 *
 * @example
 * const matrix = [
 *   [0, 1, 1],
 *   [1, 0, 0],
 *   [1, 1, 1],
 * ];
 * findDegrees(matrix); // [2, 1, 3]
 *
 * @example
 * // A matrix where no nodes are connected
 * const matrix = [
 *   [0, 0, 0],
 *   [0, 0, 0],
 *   [0, 0, 0],
 * ];
 * findDegrees(matrix); // [0, 0, 0]
 */

function findDegrees(matrix) {
  let result = [];
  for (const arr of matrix) {
    let count = 0;
    for (const each of arr) {
      if (each === 1) count++;
    }
    result.push(count);
  }
  return result;
}
