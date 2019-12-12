/* eslint-disable complexity */
/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
*/

// //this function checks to see if there are exactly n queens on the board
// const hasNQueens = grid => {
//   let counter = 0;
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid.length; col++) {
//       if (grid[row][col] === 'Q') counter++;
//     }
//   }
//   if (counter === grid.length + 1) return true;
// };

const replicateGrid = grid => {
  const newGrid = [];
  for (let row = 0; row < grid.length; row++) {
    newGrid.push([]);
    for (let col = 0; col < grid.length; col++) {
      let el = grid[row][col];
      newGrid[row].push(el);
    }
  }
  return newGrid;
};

const optionMaker = n => {
  let options = [];
  for (let i = 0; i < n; i++) {
    let row = Array(n).fill('.');
    row[i] = 'Q';
    options.push(row);
  }
  return options;
};

const isValid = (grid, row, col) => {
  let w = grid[0].length;
  let h = grid.length;
  // check row
  for (let i = 0; i < w; i++) {
    if (i !== col && grid[row][i] === 'Q') return false;
  }
  // check col
  for (let i = 0; i < h; i++) {
    if (i !== row && grid[i][col] === 'Q') return false;
  }
  // check diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (i !== row && j !== col && grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i <= h - 1 && j <= w - 1; i++, j++) {
    if (i !== row && j !== col && grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i <= h - 1 && j >= 0; i++, j--) {
    if (i !== row && j !== col && grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i >= 0 && j <= w - 1; i--, j++) {
    if (i !== row && j !== col && grid[i][j] === 'Q') return false;
  }
  return true;
};

const checkBoard = grid => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'Q') {
        if (!isValid(grid, i, j)) return false;
      }
    }
  }
  return true;
};

const helper = (grid, sols, options) => {
  if (grid.length === options.length) {
    sols.push(replicateGrid(grid));
  } else {
    for (let i = 0; i < options.length; i++) {
      grid.push(options[i]);
      if (checkBoard(grid)) {
        helper(grid, sols, options);
      }
      grid.pop();
    }
  }
};

const nQueens = n => {
  let sols = [];
  let options = optionMaker(n);
  for (let i = 0; i < n; i++) {
    const board = [options[i]];
    helper(board, sols, options);
  }
  return sols;
};

console.log(nQueens(5).length);
console.log(nQueens(4));
console.log(nQueens(10));
