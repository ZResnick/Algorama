/* eslint-disable complexity */
/*
Given a grid of m x n elements (m rows, n columns), return all elements of the grid in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const spiral = grid => {
  if (grid === null || grid.length === 0) return grid;
  let dRow = [0, +1, 0, -1]; // row directions  0 = right 1 = down left up
  let dColumn = [+1, 0, -1, 0]; // column directions
  //to go down, grid[dRow[1]][dColumn[1]] = grid[r+1][c+0]
  let row = 0;
  let col = 0;
  let direction = 0;
  let result = [];
  for (let i = 0; i < grid.length * grid[0].length; i++) {
    result.push(grid[row][col]); // add the current number
    grid[row][col] = null; // mark it as null
    // if we follow the direction and encounter a null
    if (
      !grid[row + dRow[direction]] ||
      !grid[row + dRow[direction]][col + dColumn[direction]]
    ) {
      direction = (direction + 1) % 4; //change to the next direction
    }
    // apply the direction
    row += dRow[direction];
    col += dColumn[direction];
  }
  return result;
};

const input1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];

const input2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const input3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const input4 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
];

console.log(spiral(input1).length);
console.log(spiral(input2).length);
console.log(spiral(input3).length);
console.log(spiral(input4).length);
