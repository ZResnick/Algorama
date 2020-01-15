/*
You are playing a simplified Pacman game. You start at the point (0, 0), and your destination is (target[0], target[1]). There are several ghosts on the map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions: north, east, west, or south, going from the previous point to a new point 1 unit of distance away.

You escape if and only if you can reach the target before any ghost reaches you (for any given moves the ghosts may take.)  If you reach any square (including the target) at the same time as a ghost, it doesn't count as an escape.

Return True if and only if it is possible to escape.

Example 1:
Input:
ghosts = [[1, 0], [0, 3]]
target = [0, 1]
Output: true
Explanation:
You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3) have no way to catch up with you.
*/

const dumbPacman = (ghosts, target) => {
  const helper = (start, end) => {
    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  };
  let myDistanceToTarget = helper([0, 0], target);
  for (let i = 0; i < ghosts.length; i++) {
    let GhostCoords = ghosts[i];
    if (helper(GhostCoords, target) <= myDistanceToTarget) return false;
  }
  return true;
};

console.log(
  dumbPacman(
    [
      [1, 0],
      [0, 3],
    ],
    [(0, 1)]
  )
);

console.log(dumbPacman([[1, 0]], [2, 0]));
