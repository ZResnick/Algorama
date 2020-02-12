/* eslint-disable complexity */
/*
Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
*/
var triangleNumber = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] && nums[k] && nums[j]) {
          let oblique = nums[i] + nums[j];
          let acute = Math.abs(nums[i] - nums[j]);
          let lastSide = nums[k];
          if (lastSide < oblique && lastSide > acute) count++;
        }
      }
    }
  }
  return count;
};

console.log(triangleNumber([2, 2, 3, 4]));
console.log(
  triangleNumber([
    54,
    15,
    85,
    32,
    93,
    12,
    1,
    3,
    62,
    12,
    88,
    25,
    34,
    27,
    14,
    26,
    93,
    28,
    42,
    33,
    39,
    40,
    15,
    0,
    73,
    61,
    88,
    2,
    66,
    63,
    44,
    45,
    22,
    37,
    76,
    4,
    41,
    79,
    58,
    45,
    100,
    83,
    45,
    45,
    14,
    58,
    34,
    18,
    1,
    4,
    87,
    10,
    94,
    14,
    61,
    96,
    68,
    83,
    46,
    59,
    25,
    50,
    66,
    27,
    29,
    34,
    19,
    76,
    15,
    19,
    61,
    72,
    92,
    52,
    87,
    66,
    26,
    27,
    56,
    25,
    62,
    49,
    14,
    89,
    62,
    79,
    35,
    5,
    65,
    45,
    97,
    16,
    22,
    69,
    42,
    80,
    98,
    14,
    20,
    36,
  ])
);
