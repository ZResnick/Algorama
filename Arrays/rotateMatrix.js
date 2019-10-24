/*You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
\*/

const rotateMatrix = grid => {
  let length = grid.length - 1;
  let gridLength = grid.length - 1;
  let row = 0;
  let ref = 0;
  let col = 0;
  while (col < length) {
    for (col; col < length; col++) {
      let places = {
        top: grid[row].slice(col, col + 1)[0],
        right: grid[col].slice(gridLength - row, gridLength - row + 1)[0],
        bottom: grid[gridLength - row].slice(
          gridLength - col,
          gridLength - col + 1
        )[0],
        left: grid[gridLength - col].slice(row, row + 1)[0],
      };
      grid[row][col] = places.left;
      grid[col][grid.length - 1 - row] = places.top;
      grid[grid.length - 1 - row][grid.length - 1 - col] = places.right;
      grid[grid.length - 1 - col][row] = places.bottom;
    }
    length--;
    ref++;
    col = ref;
    row++;
  }
  return grid;
};

let test1 = [
  ['x', 'x', 'x', 'x'],
  ['y', 'y', 'y', 'y'],
  ['z', 'z', 'z', 'z'],
  ['a', 'a', 'a', 'a'],
];

let test2 = [[1, 2, 3], [4, 1000, 6], [7, 8, 9]];
let test3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6, 6, 6, 6],
  [7, 7, 7, 7, 7, 7, 7, 7, 7],
  [8, 8, 8, 8, 8, 8, 8, 8, 8],
  [9, 9, 9, 9, 9, 9, 9, 9, 9],
];

console.log(rotateMatrix(test1));
console.log(rotateMatrix(test2));
console.log(rotateMatrix(test3));
