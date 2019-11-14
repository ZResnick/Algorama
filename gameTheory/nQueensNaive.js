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

const isValid = (grid, row, col, n) => {
  if (row > n || col > n) return false;
  // check row
  for (let i = 0; i < n; i++) {
    if (i !== col && grid[row][i] === 'Q') return false;
  }
  // check col
  for (let i = 0; i < n; i++) {
    if (i !== row && grid[i][col] === 'Q') return false;
  }
  // check diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i <= n - 1 && j <= n - 1; i++, j++) {
    if (grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i <= n - 1 && j >= 0; i++, j--) {
    if (grid[i][j] === 'Q') return false;
  }
  for (let i = row, j = col; i >= 0 && j <= n - 1; i--, j++) {
    if (grid[i][j] === 'Q') return false;
  }
  return true;
};

const hasNQueens = grid => {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col] === 'Q') count++;
    }
  }
  return count === grid.length;
};

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

const helper = (grid, sols) => {
  if (hasNQueens(grid)) {
    sols.push(grid);
    return;
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (isValid(grid, row, col, grid.length)) {
        let newGrid = replicateGrid(grid);
        newGrid[row][col] = 'Q';
        helper(newGrid, sols);
      }
    }
  }
};

const nQueens = n => {
  let sols = [];
  for (let i = 0; i < n; i++) {
    const board = Array(n);
    for (let row = 0; row < board.length; row++) {
      board[row] = Array(n).fill(1);
    }
    board[0][i] = 'Q';
    helper(board, sols);
  }
  return sols;
};

console.log(nQueens(5));
