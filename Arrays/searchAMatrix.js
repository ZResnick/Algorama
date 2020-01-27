/* eslint-disable complexity */
/* eslint-disable no-unused-vars */
/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

//Optimized using binary search
const searchMatrix = (matrix, target) => {
  let count = 0;
  if (!matrix.length) return false;
  const looselyContains = (arr, targ) => {
    if (arr[0] <= targ && targ <= arr[arr.length - 1]) return true;
    return false;
  };

  const doesContain = (arr, targ) => {
    if (!arr || !arr.length) return false;
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((arr.length - 1) / 2);
    if (arr[mid] === targ) return true;
    if (arr[start] === targ) return true;
    if (arr[end] === targ) return true;
    while (start !== mid && end !== mid) {
      count++;
      if (arr[mid] === targ) return true;
      if (arr[mid] < targ) {
        start = mid;
      }
      if (arr[mid] > targ) {
        end = mid;
      }
      mid = Math.floor((end + start) / 2);
    }
    return false;
  };

  const binarySearch = (arr, targ) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((arr.length - 1) / 2);
    if (looselyContains(arr[mid], targ)) return mid;
    if (looselyContains(arr[start], targ)) return start;
    if (looselyContains(arr[end], targ)) return end;
    while (start !== mid && end !== mid) {
      count++;
      if (looselyContains(arr[mid], targ)) return mid;
      if (arr[mid][0] < targ) {
        start = mid;
      }
      if (arr[mid][0] > targ) {
        end = mid;
      }
      mid = Math.floor((end + start) / 2);
    }
    return -1;
  };

  let index = binarySearch(matrix, target);
  let result = doesContain(matrix[index], target);
  console.log('Total iterations:  ', count);
  return result;
};

//Brute force method
const searchMatrixNaive = (matrix, target) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      count++;
      if (matrix[i][j] === target) {
        console.log('Total iterations:  ', count);
        return true;
      }
    }
  }
  return false;
};

console.log('Optimized:');
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
      [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
      [100, 101, 127, 133, 146, 155, 165, 177, 186, 196],
    ],
    88
  )
);

console.log('Naive:');
console.log(
  searchMatrixNaive(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    3
  )
);
console.log(
  searchMatrixNaive(
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
      [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
      [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
      [100, 101, 127, 133, 146, 155, 165, 177, 186, 196],
    ],
    88
  )
);
