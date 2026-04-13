/**
 * 1. Two Sum
 * easy
 * https://leetcode.com/problems/two-sum/description/
 *
 * Finds two indices in an array such that their values add up to the target.
 * Uses a hash map for O(n) time complexity.
 *
 * @param {number[]} nums - Array of numbers to search through.
 * @param {number} target - The target sum to find.
 * @returns {[number, number] | undefined} A tuple of indices whose values sum to the target,
 * or undefined if no solution exists.
 *
 * @example
 * twoSum([2, 7, 11, 15], 9);
 * // returns [0, 1]
 *
 * @example
 * twoSum([3, 2, 4], 6);
 * // returns [1, 2]
 */

function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const lookingFor = target - nums[i];
    if (Object.hasOwn(obj, lookingFor)) return [obj[lookingFor], i];
    obj[nums[i]] = i;
  }
}
