/* eslint-disable complexity */
/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
*/

//this function checks if the current place does not have any conflicts
const up = (grid, row, col) => {
  if (grid[row - 1] && grid[row - 1][col] !== 'Q') {
    return up(grid, row - 1, col);
  } else {
    return 1;
  }
};
const down = (grid, row, col) => {
  if (!grid[row + 1]) return 0;
  if (grid[row + 1][col] !== 'Q') {
    return down(grid, row + 1, col);
  } else {
    return 1;
  }
};
const left = (grid, row, col) => {
  if (!grid[row][col - 1]) return 0;
  if (grid[row][col - 1] && grid[row][col - 1] !== 'Q') {
    return left(grid, row, col - 1);
  } else {
    return 1;
  }
};
const right = (grid, row, col) => {
  if (!grid[row][col + 1]) return 0;
  if (grid[row][col + 1] && grid[row][col + 1] !== 'Q') {
    return right(grid, row, col + 1);
  } else {
    return 1;
  }
};
const upleft = (grid, row, col) => {
  if (!grid[row - 1]) return 0;
  if (grid[row - 1][col - 1] !== 'Q') {
    return upleft(grid, row - 1, col);
  } else {
    return 1;
  }
};
const upright = (grid, row, col) => {
  if (grid[row - 1] && grid[row - 1][col + 1] !== 'Q') {
    upright(grid, row - 1, col + 1);
  } else {
    return 1;
  }
};
const downleft = (grid, row, col) => {
  if (grid[row + 1] && grid[row + 1][col - 1] !== 'Q') {
    downleft(grid, row + 1, col - 1);
  } else {
    return 1;
  }
};
const downright = (grid, row, col) => {
  if (grid[row + 1] && grid[row + 1][col + 1] !== 'Q') {
    downright(grid, row + 1, col + 1);
  } else {
    return 1;
  }
};

const isValid = (grid, row, col) => {
  let counts = 0;
  // counts += up(grid, row, col) ? up(grid, row, col) : 0;
  // counts += down(grid, row, col) ? down(grid, row, col) : 0;
  // counts += left(grid, row, col) ? left(grid, row, col) : 0;
  // counts += right(grid, row, col) ? right(grid, row, col) : 0;
  counts += upleft(grid, row, col) ? upleft(grid, row, col) : 0;
  // counts += upright(grid, row, col) ? upright(grid, row, col) : 0;
  // counts += downleft(grid, row, col) ? downleft(grid, row, col) : 0;
  // counts += downright(grid, row, col) ? downright(grid, row, col) : 0;
  console.log(counts);
  if (!counts) {
    return true;
  } else {
    return false;
  }
};

//this function checks to see if there are exactly n queens on the board
const hasNQueens = grid => {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col] === 'Q') counter++;
    }
  }
  if (counter === grid.length + 1) return true;
};

const helper = grid => {
  //try to place a queen at every spot
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (isValid(grid, row, col)) {
        grid[row][col] = 'Q';
        helper(grid);
      }
    }
  }
  if (hasNQueens(grid)) return grid;
};

const nQueens = n => {
  let solutions = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //create new board
      const grid = Array(n);
      for (let row = 0; row < grid.length; row++) {
        grid[row] = Array(n).fill(0);
      }

      //set starting position;
      grid[i][j] = 'Q';

      //call the recursive helper function
      solutions.push(helper(grid));
    }
  }
  return solutions;
};

// console.log('soultions: ', nQueens(4));
//console.log('soultions: ', nQueens(8));

const input = [[0, 0, 0, 0], [0, 'Q', 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

console.log(isValid(input, 3, 3));
