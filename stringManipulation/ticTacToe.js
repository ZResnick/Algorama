/*
Tic-tac-toe
Write a function ticTacToe() that accepts one argument, a string representation of a tic-tac-toe grid, and returns an array of 2 numbers: the number of ways in which X or O can instantly make a winning move.
The 0th index of the returned array should be the number of ways X can win if it is currently X's turn. The other element in the array should be the number of ways O can win if it is currently O's turn.
The input grid will be provided as a string containing only the characters 'X', 'O', ' ', or '\n'.
For example, the following input corresponds to the following tic-tac-toe grid:
"X X\n OO\nXOO"
X| |X
-----
 |O|O
-----
X|O|O
For that input, we would expect the function to return the array [2, 2]. This is because if it was X's turn, they can win by making their next move in either the middle cell of the top row or the left cell of the middle row. If it was O's turn, they could make a move in either of those same 2 spaces to also win.
If the input grid represents a board for which either X or O has already won, the return array should simply be [0,0].
*/

/* eslint-disable max-statements */
/* eslint-disable complexity */

//I'm sure theres a more elegant way to do this problem (sush as keeping everything in one nested for loop with more variables), but wanted to get it done in the time allotted.
const ticTacToe = string => {
  //instantiate win counts for both x and o
  let xWins = 0;
  let oWins = 0;

  //split the string into 3 'rows'
  let grid = string.split('\n');

  //check the rows in a nested for loop
  for (let row = 0; row < 3; row++) {
    let numX = 0;
    let numO = 0;
    for (let col = 0; col < 3; col++) {
      let char = grid[row][col];
      if (char === 'X') numX++;
      if (char === 'O') numO++;
    }
    if (numX === 3 || numO === 3) return [0, 0];
    if (numX === 2 && !numO) xWins++;
    if (numO === 2 && !numX) oWins++;
  }

  //check the columns in a nested for loop
  for (let col = 0; col < 3; col++) {
    let numX = 0;
    let numO = 0;
    for (let row = 0; row < 3; row++) {
      let char = grid[row][col];
      if (char === 'X') numX++;
      if (char === 'O') numO++;
    }
    if (numX === 3 || numO === 3) return [0, 0];
    if (numX === 2 && !numO) xWins++;
    if (numO === 2 && !numX) oWins++;
  }

  //check the left to 'backslash' diagonal
  let numX = 0;
  let numO = 0;
  for (let col = 0, row = 0; row < 3; col++, row++) {
    let char = grid[row][col];
    if (char === 'X') numX++;
    if (char === 'O') numO++;
  }
  if (numX === 3 || numO === 3) return [0, 0];
  if (numX === 2 && !numO) xWins++;
  if (numO === 2 && !numX) oWins++;

  //reset the counts and check the left to 'forward slash' diagonal
  numX = 0;
  numO = 0;
  for (let col = 2, row = 0; row < 3; col--, row++) {
    let char = grid[row][col];
    if (char === 'X') numX++;
    if (char === 'O') numO++;
  }
  if (numX === 3 || numO === 3) return [0, 0];
  if (numX === 2 && !numO) xWins++;
  if (numO === 2 && !numX) oWins++;

  return [xWins, oWins];
};

console.log(ticTacToe('X X\n OO\nXOO'));
console.log(ticTacToe('O X\nO O\nX O'));
console.log(ticTacToe('O X\nXOO\nX O'));
