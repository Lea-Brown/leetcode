/* 1207. Unique Number of Occurrences

https://leetcode.com/problems/unique-number-of-occurrences/

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 
Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

function uniqueOccurrences(arr) {
  let occurrences = [];
  let set = [...new Set(arr)];
  for (let i = 0; i < set.length; i++) {
    let check = arr.filter((e) => e == set[i]).length;
    if (occurrences.includes(check)) {
      return false;
    } else {
      occurrences.push(check);
    }
  }
  return true;
}

// trying a differrent method. I need to use objects more.
function uniqueOccurrences(arr) {
  const obj = {};
  for (const char of arr) {
    obj[char] = (obj[char] || 0) + 1;
  }
  const values = Object.values(obj);
  const uniqueValues = new Set(values);
  return uniqueValues.size === values.length;
}
