/*
Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

Example 1:

Input: A = [4,7,9,10], K = 1
Output: 5
Explanation:
The first missing number is 5.
Example 2:

Input: A = [4,7,9,10], K = 3
Output: 8
Explanation:
The missing numbers are [5,6,8,...], hence the third missing number is 8.
Example 3:

Input: A = [1,2,4], K = 3
Output: 6
Explanation:
The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
*/

const missingElement = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    let next = nums[i + 1] ? nums[i + 1] : Infinity;
    for (let j = start + 1; j < next; j++) {
      count++;
      if (count === k) return j;
    }
  }
};

console.log([4, 7, 9, 10], 1);
console.log([4, 7, 9, 10], 3);
console.log([1, 2, 4], 3);
console.log([1, 2, 4], 756);
