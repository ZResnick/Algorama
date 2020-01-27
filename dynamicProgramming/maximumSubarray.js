/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const maxSubArray = nums => {
  let maximum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maximum) maximum = nums[i];
    if (nums[i] + nums[i - 1] > nums[i]) {
      nums[i] += nums[i - 1];
      maximum = maximum < nums[i] ? nums[i] : maximum;
    }
  }
  return maximum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(
  maxSubArray([
    32,
    5,
    -6,
    75,
    45,
    -3,
    -2,
    5,
    7,
    8,
    9,
    -977654,
    -2,
    1,
    -34,
    5,
    -6,
    -43,
    -23,
    43,
    53,
    54,
    -7,
  ])
);
