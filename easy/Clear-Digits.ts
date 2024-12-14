/* 3174. Clear Digits

https://leetcode.com/problems/clear-digits/

You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.

Example 1:
Input: s = "abc"
Output: "abc"
Explanation:
There is no digit in the string.

Example 2:
Input: s = "cb34"
Output: ""
Explanation:
First, we apply the operation on s[2], and s becomes "c4".
Then we apply the operation on s[1], and s becomes "".

Constraints:
1 <= s.length <= 100
s consists only of lowercase English letters and digits.
The input is generated such that it is possible to delete all digits.
*/

// big O of O(n)
function clearDigits(string: string): string {
  let result: string[] = [];
  const nums: string = "1234567890";
  for (const letter of string) {
    nums.includes(letter) ? result.pop() : result.push(letter);
  }
  return result.join("");
}

// first try. had big O of O(n2)
function clearDigits2(s: string): string {
  let sArr: string[] = [...s];
  const nums: string = "1234567890";
  for (let i = 0; i < sArr.length; i++) {
    if (nums.includes(sArr[i])) {
      sArr.splice(i - 1, 2);
      i -= 2;
    }
  }
  return sArr.join("");
}
