/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

const wordBreak = (str, wordDict) => {
  let dict = new Set(wordDict);
  let dp = Array(str.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j]) {
        if (dict.has(str.slice(j, i + 1))) dp[i + 1] = true;
      }
    }
  }
  return dp[str.length];
};

console.log(false, wordBreak('catsandog', ['cats', 'dog', 'and', 'cat']));
console.log(true, wordBreak('catsandog', ['cats', 'dog', 'sand', 'an', 'cat']));
console.log(true, wordBreak('leetcode', ['leet', 'code']));
