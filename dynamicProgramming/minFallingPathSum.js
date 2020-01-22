/*
Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation:
The possible falling paths are:
[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
The falling path with the smallest sum is [1,4,7], so the answer is 12.
*/

const minFallingPathSum = grid => {
  let colLength = grid[0].length;
  for (let row = 1; row < grid.length; row++) {
    for (let col = 0; col < colLength; col++) {
      let topLeft = col > 0 ? grid[row - 1][col - 1] : Infinity;
      let top = grid[row - 1][col];
      let topRight = col < colLength - 1 ? grid[row - 1][col + 1] : Infinity;
      grid[row][col] += Math.min(top, topLeft, topRight);
    }
  }
  console.log(grid);
  return Math.min(...grid[grid.length - 1]);
};

console.log(
  minFallingPathSum([
    [1, 2, 3, 4],
    [8, 7, 6, 5],
    [11, 12, 10, 9],
  ])
);

console.log(
  minFallingPathSum([
    [7, 8, 23, 4, 5, 1, 2, 3, 4, 5, 3, 6, 5],
    [8, 7, 6, 5, 1, 3, 4, 6, 7, 45, 6, 8, 1],
    [11, 45, 57, 12, 67, 12, 10, 9, 9, 67, 56, 12, 23],
  ])
);
