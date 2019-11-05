/*

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

*/

const minPathTraingle = tri => {
  let rows = tri.length;

  //left edge
  for (let row = 1; row < rows; row++) {
    tri[row][0] += tri[row - 1][0];
  }

  //right edge
  for (let row = 1; row < rows; row++) {
    let lastIndex = tri[row].length - 1;
    tri[row][lastIndex] += tri[row - 1][lastIndex - 1];
  }

  //interior
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < tri[row].length - 1; col++) {
      tri[row][col] +=
        tri[row - 1][col - 1] > tri[row - 1][col]
          ? tri[row - 1][col]
          : tri[row - 1][col - 1];
    }
  }

  //return min of last array
  return Math.min(...tri[tri.length - 1]);
};

const input = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minPathTraingle(input));
