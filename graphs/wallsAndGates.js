/* eslint-disable complexity */
/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example:

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

const wallsAndGates = rooms => {
  let q = [];
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) q.push([i, j]);
    }
  }
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let currGate = q.shift();
      let currVal = rooms[currGate[0]][currGate[1]];
      let above = [currGate[0] - 1, currGate[1]];
      let below = [currGate[0] + 1, currGate[1]];
      let right = [currGate[0], currGate[1] + 1];
      let left = [currGate[0], currGate[1] - 1];
      let neighbors = [above, below, left, right];
      for (let j = 0; j < neighbors.length; j++) {
        let neighbor = neighbors[j];
        let row = neighbor[0];
        let col = neighbor[1];
        if (rooms[row] && rooms[row][col] === 2147483647) {
          rooms[row][col] = currVal + 1;
          q.push([row, col]);
        }
      }
    }
  }
  return rooms;
};

console.log(
  wallsAndGates([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
);
