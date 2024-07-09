/* 169. Majority Element

https://leetcode.com/problems/majority-element/description/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

function majorityElement(nums) {
  let hold = 0;
  let result = 0;
  const checkMe = [...new Set(nums)];
  for (let i = 0; i < checkMe.length; i++) {
    if (nums.filter((e) => e == checkMe[i]).length > hold) {
      hold = nums.filter((e) => e == checkMe[i]);
      result = checkMe[i];
    }
  }
  return result;
}
