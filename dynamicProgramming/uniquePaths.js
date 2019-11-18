/*

A robot is located at the top-left corner of a m x n grid

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.

How many possible unique paths are there?

*/

const uniquePaths = (rows, cols) => {
  // The Below works too bu doens tlook as nice.
  // let grid = Array(rows).fill(Array(cols).fill(1));

  let grid = Array(rows);
  for (let rowNum = 0; rowNum < rows; rowNum++) {
    grid[rowNum] = Array(cols).fill(1);
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
    }
  }
  console.log(grid);
  return grid[rows - 1][cols - 1];
};

console.log(uniquePaths(7, 3));
