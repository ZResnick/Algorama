/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  let longest = 0;
  let memo = {};
  let curSub = 0;
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (s[j] && !memo[s[j]]) {
      memo[s[j]] = true;
      curSub++;
      j++;
    }
    if (curSub > longest) {
      longest = curSub;
    }
    memo = {};
    curSub = 0;
  }
  return longest;
};

console.log(lengthOfLongestSubstring('ppwkep'));
console.log(lengthOfLongestSubstring('abcabcaabbcc'));
console.log(
  lengthOfLongestSubstring('gbwoeagbqpwagbqlakbsfcpqiebaefpviqabvkq')
);
console.log(lengthOfLongestSubstring('bbbbbbbc'));
console.log(lengthOfLongestSubstring('bbb'));
console.log(lengthOfLongestSubstring(''));
