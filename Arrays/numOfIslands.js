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

Approach:
1.  Iterate throiugh each row
2.  Within each row, iterate through each column
3.  If a cell is a 1, call the helper function passing to it the grid, and the coords of the found 1

    Helper Function:
    1.  First, change the current cell to a 0
    2.  You only need to check down and right...
    3.  As long as current cell isnt in the last column or the  bottom row, check the right cell and the bottom cell
    4.  If that cell is a 1, call the helper on that cell too
    5.  This will run until all the cells on that island are cleared

4.  Increase the counter and the whole for loop will iterate.

*/

const helper = (grid, row, col) => {
  grid[row][col] = 0;
  if (col <= grid[0].length - 2) {
    if (grid[row][col + 1] === 1) {
      helper(grid, row, col + 1);
    }
  }
  if (row <= grid.length - 2) {
    if (grid[row + 1][col] === 1) {
      helper(grid, row + 1, col);
    }
  }
};

const numOfIslands = grid => {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        helper(grid, row, col);
        counter++;
      }
    }
  }
  return counter;
};

//Tests
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

let grid3 = [
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
];

let grid4 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(numOfIslands(grid1));
console.log(numOfIslands(grid2));
console.log(numOfIslands(grid3));
console.log(numOfIslands(grid4));
