/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

const merge = (nums1, m, nums2, n) => {
  nums1.splice(m);
  let i = 0;
  while (i < nums1.length) {
    if (nums2[0] < nums1[i]) {
      nums1.splice(i, 0, nums2.shift());
    } else i++;
  }
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(
  merge([-2, -1, 0, 0, 0, 0, 3, 4, 5, 6, 0, 0, 0], 10, [-3, 1, 3], 3)
);
