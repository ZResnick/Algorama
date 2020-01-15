/*
Given an array of numbers and a target, return all pairs that sum to the target
*/

const pairSum = (arr, sum) => {
  let sols = [];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (hash[curr]) {
      sols.push([curr, hash[curr]]);
    } else {
      hash[sum - curr] = curr;
    }
  }
  return sols;
};

console.log(pairSum([1, 5, 6, 4, 3, 2], 7));
console.log(
  pairSum([32, 53, 65, 56, 85, 32, 3380, 7457, 12341, 535234, 3433, 55], 3465)
);
