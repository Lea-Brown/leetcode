/**
 * 3512. Minimum Operations to Make Array Sum Divisible by K
 * easy
 * https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/description/
 *
 * Calculates the minimum number of operations needed to make the sum
 * of an array divisible by k.
 *
 * @param {number[]} nums - An array of integers to sum.
 * @param {number} k - The divisor to check divisibility against.
 * @returns {number} The remainder when the total sum is divided by k.
 */

function minOperations(nums, k) {
  let count = 0;
  for (const each of nums) {
    count += each;
  }
  return count % k;
}
