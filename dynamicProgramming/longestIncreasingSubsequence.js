/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
*/

var longestIncreasingSubsequence = function(nums) {
  if (nums.length === 0) return 0;
  let dp = [1];
  for (let i = 1; i < nums.length; i++) {
    dp.push(1);
    for (let j = 0; j < dp.length - 1; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = dp[j] + 1 > dp[i] ? dp[j] + 1 : dp[i];
      }
    }
  }
  return Math.max(...dp);
};

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(
  longestIncreasingSubsequence([
    10,
    9,
    2,
    5,
    3,
    7,
    3,
    5,
    64,
    3,
    8,
    80,
    5,
    34,
    43,
    5,
    46,
    65,
    7,
    64,
    43,
    42,
    4,
    35,
    466,
    64,
    53,
    4,
    23,
    3,
    4,
    6,
    6,
    34,
    3567,
    6864,
    5324,
    13,
    356,
    49,
    0,
    8101,
    18,
  ])
);
