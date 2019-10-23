/* eslint-disable max-statements */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

const isValidSudoku = board => {
  //rows
  for (let i = 0; i < 9; i++) {
    let memo = {};
    let row = board[i];
    for (let j = 0; j < 9; j++) {
      let num = row[j];
      if (memo[num]) return false;
      if (num !== '.') {
        memo[num] = true;
      }
    }
  }
  //columns
  for (let i = 0; i < 9; i++) {
    let memo = {};
    for (let j = 0; j < 9; j++) {
      let curRow = board[j];
      let num = curRow[i];
      if (memo[num]) return false;
      if (num !== '.') {
        memo[num] = true;
      }
    }
  }

  let rowStart = 0;
  let colStart = 0;
  let counter = 0;

  for (let k = 0; k < 9; k++) {
    //square counter
    let squareMemo = {};
    counter++;

    for (let i = rowStart; i < rowStart + 3; i++) {
      //rows of each box
      let row = board[i];
      for (let j = colStart; j < colStart + 3; j++) {
        let num = row[j];
        if (squareMemo[num]) return false;
        if (num !== '.') {
          squareMemo[num] = true;
        }
      }
    }

    //update starting factors
    squareMemo = {};
    if (counter === 3 || counter === 6) {
      colStart = 0;
      rowStart += 3;
    } else {
      colStart += 3;
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board2 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['8', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
console.log(isValidSudoku(board2));
