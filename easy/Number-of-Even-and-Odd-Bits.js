/* 2595. Number of Even and Odd Bits

https://leetcode.com/problems/number-of-even-and-odd-bits/

You are given a positive integer n.

Let even denote the number of even indices in the binary representation of n with value 1.

Let odd denote the number of odd indices in the binary representation of n with value 1.

Note that bits are indexed from right to left in the binary representation of a number.

Return the array [even, odd].

Example 1:
Input: n = 50
Output: [1,2]
Explanation:
The binary representation of 50 is 110010.
It contains 1 on indices 1, 4, and 5.

Example 2:
Input: n = 2
Output: [0,1]
Explanation:
The binary representation of 2 is 10.
It contains 1 only on index 1.

Constraints:
1 <= n <= 1000
*/

function evenOddBit(n) {
  const bitN = n.toString(2).split("").reverse();
  let result = [0, 0];
  for (let i = 0; i < bitN.length; i++) {
    if (bitN[i] === "1" && i % 2 === 0) result[0]++;
    if (bitN[i] === "1" && i % 2 !== 0) result[1]++;
  }
  return result;
}
