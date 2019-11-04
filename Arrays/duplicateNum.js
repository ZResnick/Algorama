/*

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

*/

var duplicateNum = function(nums) {
  let tortoise = 0;
  let hair = 0;
  do {
    tortoise = nums[tortoise];
    hair = nums[hair];
    hair = nums[hair];
  } while (tortoise !== hair);
  hair = 0;
  while (tortoise !== hair) {
    tortoise = nums[tortoise];
    hair = nums[hair];
  }
  return tortoise;
};

console.log(duplicateNum([1, 3, 4, 2, 2]));
console.log(duplicateNum([5, 3, 1, 3, 2, 4]));
