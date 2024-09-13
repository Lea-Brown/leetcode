/* 2006. Count Number of Pairs With Absolute Difference K

https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 
Example 1:
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 
Constraints:
1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99
*/

function countKDifference(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let e = i + 1; e < nums.length; e++) {
      if (Math.abs(nums[i] - nums[e]) == k) count++;
    }
  }
  return count;
}

// chartGPT refractored. Better time complexity.
function countKDifference(nums, k) {
  let count = 0;
  const numFrequency = new Map();
  for (const num of nums) {
    count +=
      (numFrequency.get(num - k) || 0) + (numFrequency.get(num + k) || 0);
    numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
  }
  return count;
}
