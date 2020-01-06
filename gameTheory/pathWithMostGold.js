/* eslint-disable complexity */
/*
In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
*/

const backtrack = (curRow, curCol, grid, total = 0, maximum = [0]) => {
  //add the current amount to the total
  total += grid[curRow][curCol];

  //Check to see if total is the greatest you've gotten so far. If it is, change the reference of the maximum to that number
  if (total > maximum[0]) maximum[0] = total;

  //make a copy of the board and change the current position to zero
  let newGrid = grid.map(row => {
    return [...row];
  });
  newGrid[curRow][curCol] = 0;

  /*
  check to see if up, down, left, or right exist.
  If they don't exist return the total.
  If they do, call backtrack on that space
  */

  //right
  if (newGrid[curRow][curCol + 1]) {
    backtrack(curRow, curCol + 1, newGrid, total, maximum);
  }
  //down
  if (newGrid[curRow + 1] && newGrid[curRow + 1][curCol]) {
    backtrack(curRow + 1, curCol, newGrid, total, maximum);
  }
  //left
  if (newGrid[curRow][curCol - 1]) {
    backtrack(curRow, curCol - 1, newGrid, total, maximum);
  }
  //down
  if (newGrid[curRow - 1] && newGrid[curRow - 1][curCol]) {
    backtrack(curRow - 1, curCol, newGrid, total, maximum);
  }
  //if there are no more spaces to check, return the total
  return total;
};

const pathWithMostGold = grid => {
  let maximum = [0];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col]) {
        backtrack(row, col, grid, 0, maximum);
      }
    }
  }
  return maximum[0];
};

let goldMine1 = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];
let goldMine2 = [
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
];

let goldMine3 = [
  [1, 2, 3],
  [5, 10, 0],
  [0, 0, 0],
];

let goldMine4 = [
  [0, 0, 34, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 21, 0, 0, 0, 0, 0],
  [0, 18, 0, 0, 8, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [15, 0, 0, 0, 0, 22, 0, 0, 0, 21],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0, 0, 0, 0, 38, 0],
];
console.log('24? ----  ', pathWithMostGold(goldMine1));
console.log('28? ----  ', pathWithMostGold(goldMine2));
console.log('21? ----  ', pathWithMostGold(goldMine3));
console.log('38? ----  ', pathWithMostGold(goldMine4));
