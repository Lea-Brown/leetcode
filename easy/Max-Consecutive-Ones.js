/* 485. Max Consecutive Ones

https://leetcode.com/problems/max-consecutive-ones/description/

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]

Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

function findMaxConsecutiveOnes(nums) {
  let result = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      temp++;
      if (temp > result) result = temp;
    } else {
      temp = 0;
    }
  }
  return result;
}
