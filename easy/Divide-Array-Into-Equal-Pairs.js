/** 2206. Divide Array Into Equal Pairs
 *
 *https://leetcode.com/problems/divide-array-into-equal-pairs/
 *
 * Determines if an array can be divided into pairs of equal values
 * @param {number[]} nums - Array of integers to be divided into pairs
 * @returns {boolean} - True if array can be divided into equal pairs, false otherwise
 *
 * @example
 * divideArray([1, 2, 2, 1]) // returns true
 * divideArray([1, 2, 3, 4]) // returns false
 * divideArray([2, 2, 2, 2]) // returns true
 */

function divideArray(nums) {
  // Object to store frequency count of each number
  const obj = {};

  // Initialize result with required number of pairs
  // (half of array length)
  let result = nums.length / 2;

  // Iterate through each number in the array
  for (const each of nums) {
    // Increment count of current number
    // If number doesn't exist in obj, initialize with 0
    obj[each] = (obj[each] || 0) + 1;

    // If count becomes even, we found a pair
    // Decrement result to track remaining pairs needed
    if (obj[each] % 2 === 0) result--;
  }

  // If result is 0, all pairs were found
  // Otherwise, not all numbers could be paired
  return result === 0;
}
