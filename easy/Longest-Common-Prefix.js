/* 14. Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

// chatGPT helped
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  const shortest = strs.reduce((a, b) => (a.length <= b.length ? a : b));

  for (let i = 0; i < shortest.length; i++) {
    const prefix = shortest.slice(0, shortest.length - i);
    if (strs.every((str) => str.startsWith(prefix))) {
      return prefix;
    }
  }

  return "";
}
