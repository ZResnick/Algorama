/* eslint-disable complexity */
/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.
*/

const minRotations = (top, bottom) => {
  //count the quantity of each number in a hash table
  let hash = {};
  for (let i = 0; i < top.length; i++) {
    let curTop = top[i];
    let curBottom = bottom[i];
    hash[curTop] ? hash[curTop]++ : (hash[curTop] = 1);
    hash[curBottom] ? hash[curBottom]++ : (hash[curBottom] = 1);
  }

  //determine which numbers are even viable.  The occurrence of a number must be at least equal to or greater than the number of dominoes for it to be viable.
  let enough = [];
  for (let number in hash) {
    if (hash[number] >= top.length) enough.push(Number(number));
  }

  //determine if each domino has one of these numbers
  for (let i = 0; i < enough.length; i++) {
    let curNum = enough[i];
    for (let j = 0; j < top.length; j++) {
      if (top[j] !== curNum && bottom[j] !== curNum) {
        enough[i] = 0;
        break;
      }
    }
  }

  let minimum = Infinity;
  for (let i = 0; i < enough.length; i++) {
    if (enough[i]) {
      let switchedTop = 0;
      let switchedBottom = 0;
      for (let j = 0; j < top.length; j++) {
        if (top[j] === enough[i] && bottom[j] !== enough[i]) switchedTop++;
        if (bottom[j] === enough[i] && top[j] !== enough[i]) switchedBottom++;
      }
      let switched = Math.min(switchedBottom, switchedTop);
      if (switched < minimum) minimum = switched;
    }
  }

  return minimum === Infinity ? -1 : minimum;
};

console.log(minRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
console.log(minRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));
console.log(minRotations([1, 2, 1, 1, 1, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2, 2]));
console.log(minRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
