/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

const product = arr => {
  let left = Array(arr.length).fill(1);
  let right = Array(arr.length).fill(1);
  for (let i = 1, j = arr.length - 2; i < arr.length; i++, j--) {
    left[i] = arr[i - 1] * left[i - 1];
    right[j] = arr[j + 1] * right[j + 1];
  }
  return left.map((el, i) => el * right[i]);
};

console.log(product([1, 2, 3, 4]));
