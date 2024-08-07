/* 819. Most Common Word

https://leetcode.com/problems/most-common-word/description/

Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:
Input: paragraph = "a.", banned = []
Output: "a"
 
Constraints:
1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.
*/

function mostCommonWord(paragraph, banned) {
  let cleanArr = [];
  let wordToAdd = "";
  for (let i = 0; i < paragraph.length; i++) {
    if (/^[a-zA-Z]$/.test(paragraph[i])) {
      wordToAdd = wordToAdd + paragraph[i];
    } else {
      if (wordToAdd.length > 0) cleanArr.push(wordToAdd.toLowerCase());
      wordToAdd = "";
    }
  }
  if (wordToAdd.length > 0) cleanArr.push(wordToAdd.toLowerCase());
  const unique = [...new Set(cleanArr)];
  let count = 0;
  let word = "";
  for (let i = 0; i < unique.length; i++) {
    const isCommon = cleanArr.filter((e) => e == unique[i]).length;
    if (isCommon > count && !banned.some((word) => word == unique[i])) {
      count = isCommon;
      word = unique[i];
    }
  }
  return word;
}
