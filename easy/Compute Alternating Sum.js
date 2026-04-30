/**
 * 3701. Compute Alternating Sum
 * easy
 * https://leetcode.com/problems/compute-alternating-sum/description/
 *
 * Calculates the alternating sum of an array of numbers.
 * Adds elements at even indices and subtracts elements at odd indices.
 *
 * @param {number[]} nums - The array of numbers to process.
 * @returns {number} The alternating sum of the array.
 *
 * @example
 * alternatingSum([5, 3, 2, 4, 1]); // 5 - 3 + 2 - 4 + 1 = 1
 * alternatingSum([1, 2, 3]);        // 1 - 2 + 3 = 2
 *
 * @complexity O(n) — iterates through the array once.
 */

function alternatingSum(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    i % 2 !== 0 ? (result -= nums[i]) : (result += nums[i]);
  }
  return result;
}
