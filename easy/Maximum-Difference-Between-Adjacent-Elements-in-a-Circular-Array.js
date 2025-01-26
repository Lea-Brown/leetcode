/* 3423. Maximum Difference Between Adjacent Elements in a Circular Array

https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/

Given a circular array nums, find the maximum absolute difference between adjacent elements.

Note: In a circular array, the first and last elements are adjacent.

Example 1:
Input: nums = [1,2,4]
Output: 3
Explanation:
Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.

Example 2:
Input: nums = [-5,-10,-5]
Output: 5
Explanation:
The adjacent elements nums[0] and nums[1] have the maximum absolute difference of |-5 - (-10)| = 5.

Constraints:
2 <= nums.length <= 100
-100 <= nums[i] <= 100
*/

function maxAdjacentDistance(nums) {
  let maxDiff = Math.abs(nums[0] - nums[nums.length - 1]);
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = Math.abs(nums[i] - nums[i + 1]);
    if (diff > maxDiff) maxDiff = diff;
  }
  return maxDiff;
}
