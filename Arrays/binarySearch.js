/* eslint-disable complexity */
/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
*/

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((arr.length - 1) / 2);
  if (arr[mid] === target) return mid;
  if (arr[start] === target) return start;
  if (arr[end] === target) return end;
  while (start !== mid && end !== mid) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      start = mid;
    }
    if (arr[mid] > target) {
      end = mid;
    }
    mid = Math.floor((end + start) / 2);
  }
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 5));
console.log(binarySearch([5], 5));
console.log(binarySearch([-1, 0, 3], 3));
console.log(
  binarySearch(
    [-1, 0, 3, 4, 6, 7, 88, 99, 15, 34, 23, 25, 67, 12].sort((a, b) => a - b),
    125
  )
);
console.log(
  binarySearch(
    [-1, 0, 3, 4, 6, 7, 88, 99, 15, 34, 23, 25, 67, 12].sort((a, b) => a - b),
    23
  )
);
