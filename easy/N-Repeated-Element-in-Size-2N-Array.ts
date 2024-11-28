/* 961. N-Repeated Element in Size 2N Array

https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example 1:
Input: nums = [1,2,3,3]
Output: 3

Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
 
Constraints:
2 <= n <= 5000
nums.length == 2 * n
0 <= nums[i] <= 104
nums contains n + 1 unique elements and one of them is repeated exactly n times.
*/

function repeatedNTimes(nums: number[]): number {
  const target = nums.length / 2;
  const objSeenNums: { [key: number]: number } = {};
  for (const num of nums) {
    objSeenNums[num] = (objSeenNums[num] || 0) + 1;
    if (objSeenNums[num] === target) return num;
  }
  return -1;
}

// re read the question. Inly 1 number is repeated
function repeatedNTimes2(nums: number[]): number {
  const objSeenNums: { [key: number]: boolean } = {};
  for (const num of nums) {
    if (objSeenNums[num]) return num;
    objSeenNums[num] = true;
  }
  return -1;
}
