/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

const minPathSum = grid => {
  let rows = grid.length;
  let cols = grid[0].length;

  //first row
  for (let col = 1; col < cols; col++) {
    grid[0][col] += grid[0][col - 1];
  }

  //first column
  for (let row = 1; row < rows; row++) {
    grid[row][0] += grid[row - 1][0];
  }

  //finish grid
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      grid[row][col] +=
        grid[row - 1][col] < grid[row][col - 1]
          ? grid[row - 1][col]
          : grid[row][col - 1];
    }
  }
  return grid[rows - 1][cols - 1];
};

const input = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
const input2 = [
  [1, 3, 1, 6, 2, 1, 6, 7, 9],
  [1, 5, 1, 3, 6, 1, 1, 1, 7],
  [4, 2, 1, 6, 7, 8, 2, 3, 4],
];

console.log(minPathSum(input));
console.log(minPathSum(input2));
