/* eslint-disable complexity */
/*

A robot is located at the top-left corner of a m x n grid.  Obstacles are represwented as 1's

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.

How many possible unique paths are there?

input: [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
*/

const uniquePathsII = input => {
  if (input[0][0] === 1) return 0;

  //initialize the array with zeroes and nulls
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[0].length; col++) {
      if (input[row][col] === 1) input[row][col] = 0;
      else input[row][col] = null;
    }
  }
  //initialize the starting point
  input[0][0] = 1;

  //initalize the first row
  for (let i = 1; i < input[0].length; i++) {
    if (input[0][i] === null) {
      input[0][i] = input[0][i] + input[0][i - 1];
    }
  }

  //initalize the first column
  for (let i = 1; i < input.length; i++) {
    if (input[i][0] === null) {
      input[i][0] = input[i][0] + input[i - 1][0];
    }
  }

  for (let row = 1; row < input.length; row++) {
    for (let col = 1; col < input[0].length; col++) {
      if (input[row][col] === null) {
        input[row][col] = input[row - 1][col] + input[row][col - 1];
      }
    }
  }
  console.log(input);
  return input[input.length - 1][input[0].length - 1];
};

console.log(uniquePathsII([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
