/* eslint-disable complexity */
/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
*/
const sidewaysHelper = (grid, row, col) => {
  if (grid[row][col + 1] === 0 || grid[row][col + 1] === 1) {
    grid[row][col + 1] = 1;
    sidewaysHelper(grid, row, col + 1);
  }
  if (grid[row][col - 1] === 0 || grid[row][col - 1] === 0) {
    grid[row][col - 1] = 1;
    sidewaysHelper(grid, row, col - 1);
  }
};

const downHelper = (grid, row, col) => {
  if (grid[row + 1] && grid[row + 1][col] === 0) {
    grid[row + 1][col] = 1;
    downHelper(grid, row + 1, col);
  }
  if (grid[row + 1] && grid[row + 1][col] === 1) {
    grid[row + 1][col] = 1;
    downHelper(grid, row + 1, col);
  }
};

const upHelper = (grid, row, col) => {
  if (grid[row - 1] && grid[row - 1][col] === 0) {
    grid[row - 1][col] = 1;
    upHelper(grid, row - 1, col);
  }
  if (grid[row - 1] && grid[row - 1][col] === 1) {
    grid[row - 1][col] = 1;
    upHelper(grid, row - 1, col);
  }
};

const rightDiagonalHelper = (grid, row, col) => {
  if (grid[row + 1] && grid[row + 1][col + 1] === 0) {
    grid[row + 1][col + 1] = 1;
    rightDiagonalHelper(grid, row + 1, col + 1);
  }
  if (grid[row + 1] && grid[row + 1][col + 1] === 1) {
    grid[row + 1][col + 1] = 1;
    rightDiagonalHelper(grid, row + 1, col + 1);
  }
};

const leftDiagonalHelper = (grid, row, col) => {
  if (grid[row + 1] && grid[row + 1][col - 1] === 0) {
    grid[row + 1][col - 1] = 1;
    leftDiagonalHelper(grid, row + 1, col - 1);
  }
  if (grid[row + 1] && grid[row + 1][col - 1] === 1) {
    grid[row + 1][col - 1] = 1;
    leftDiagonalHelper(grid, row + 1, col - 1);
  }
};

const rightUpDiagonalHelper = (grid, row, col) => {
  if (grid[row - 1] && grid[row - 1][col + 1] === 0) {
    grid[row - 1][col + 1] = 1;
    rightUpDiagonalHelper(grid, row - 1, col + 1);
  }
  if (grid[row - 1] && grid[row - 1][col + 1] === 1) {
    grid[row - 1][col + 1] = 1;
    rightUpDiagonalHelper(grid, row - 1, col + 1);
  }
};

const leftUpDiagonalHelper = (grid, row, col) => {
  if (grid[row - 1] && grid[row - 1][col - 1] === 0) {
    grid[row - 1][col - 1] = 1;
    leftUpDiagonalHelper(grid, row - 1, col - 1);
  }
  if (grid[row - 1] && grid[row - 1][col - 1] === 1) {
    grid[row - 1][col - 1] = 1;
    leftUpDiagonalHelper(grid, row - 1, col - 1);
  }
};

let markPaths = (grid, row, col) => {
  sidewaysHelper(grid, row, col);
  downHelper(grid, row, col);
  upHelper(grid, row, col);
  rightDiagonalHelper(grid, row, col);
  leftDiagonalHelper(grid, row, col);
  leftUpDiagonalHelper(grid, row, col);
  rightUpDiagonalHelper(grid, row, col);
};

const nQueens = n => {
  let solutions = [];
  for (let startingRow = 0; startingRow < n; startingRow++) {
    for (let startingCol = 0; startingCol < n; startingCol++) {
      let grid = [];
      //make n by n array of 0's
      for (let rows = 0; rows < n; rows++) {
        grid.push([]);
        for (let cols = 0; cols < n; cols++) {
          grid[rows].push(0);
        }
      }
      //place the first queen and mark its paths with ones using the helper functions;
      let counter = 1;
      grid[startingRow][startingCol] = 'Q';
      markPaths(grid, startingRow, startingCol);

      //iterate through the rest of the board searchig for 0's.  If a zero is found, place a queen and call the helper functions on the cooords;
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          if (grid[row][col] === 0) {
            grid[row][col] = 'Q';
            markPaths(grid, row, col);
            counter++;
          }
        }
      }
      if (counter === n) {
        solutions.push(grid, startingRow, startingCol);
      }
    }
  }
  return solutions;
};

console.log('soultions: ', nQueens(4));
//console.log('soultions: ', nQueens(8));
