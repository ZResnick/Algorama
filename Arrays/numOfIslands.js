/*
Given a binary matrix (2D array) of 1s (land) and 0s (water), implement a function numIslands to count the number of islands. An island is a block of land surrounded by water. It can be formed by connecting adjacent lands horizontally or vertically, but NOT diagonally. You may assume all four edges of the grid are all surrounded by water.

For example, in the image below, there are 6 different islands highlighted in different colors to distinguish them:
Example 1:
const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(numIslands(grid));    // 1

Example 2:
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
console.log(numIslands(grid));    // 3
*/

const helper = (grid, coords) => {
  let row = coords[0];
  let col = coords[1];
  grid[row][col] = 0;
  let right;
  let down;
  let width = grid[0].length;
  let height = grid.length;
  if (col <= width - 2) {
    right = grid[row][col + 1];
  }
  if (row <= height - 2) {
    down = grid[row + 1][col];
  }
  if (right === 1) {
    helper(grid, [row, col + 1]);
  }
  if (down === 1) {
    helper(grid, [row + 1, col]);
  }
};

const numOfIslands = grid => {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        helper(grid, [row, col]);
        counter++;
      }
    }
  }
  return counter;
};

let grid1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

let grid2 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(numOfIslands(grid1));
console.log(numOfIslands(grid2));
