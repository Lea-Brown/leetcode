/* 3079. Find the Sum of Encrypted Integers

https://leetcode.com/problems/find-the-sum-of-encrypted-integers/

You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

Return the sum of encrypted elements.

Example 1:
Input: nums = [1,2,3]
Output: 6
Explanation: The encrypted elements are [1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.

Example 2:
Input: nums = [10,21,31]
Output: 66
Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.

Constraints:
1 <= nums.length <= 50
1 <= nums[i] <= 1000
*/

function sumOfEncryptedInt(nums) {
  const encrypt = (num) => {
    const numStr = num.toString();
    const maxDigit = Math.max(...numStr.split("").map(Number));
    return parseInt("".padStart(numStr.length, maxDigit));
  };
  return nums.reduce((sum, num) => sum + encrypt(num), 0);
}
