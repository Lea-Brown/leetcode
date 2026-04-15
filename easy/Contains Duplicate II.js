/**
 * 219. Contains Duplicate II
 * easy
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * Determines whether the array contains duplicate values such that
 * the indices of the duplicates are at most `k` apart.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @param {number} k - The maximum allowed index difference between duplicate values.
 * @returns {boolean} Returns `true` if there are two distinct indices i and j
 * such that nums[i] === nums[j] and |i - j| <= k; otherwise, `false`.
 *
 * @example
 * containsNearbyDuplicate([1, 2, 3, 1], 3);
 * // → true (1 appears at indices 0 and 3, difference is 3)
 *
 * @example
 * containsNearbyDuplicate([1, 0, 1, 1], 1);
 * // → true (1 appears at indices 2 and 3, difference is 1)
 *
 * @example
 * containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
 * // → false (duplicates exist but are too far apart)
 */

function containsNearbyDuplicate(nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(obj, nums[i])) {
      if (i - obj[nums[i]] <= k) return true;
    }
    obj[nums[i]] = i;
  }
  return false;
}
