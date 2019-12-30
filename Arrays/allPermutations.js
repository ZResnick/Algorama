/*
given a list of unique characters, return an array of all possible permutations
of that list of characters
*/

const permutations = nums => {
  let sols = [[nums[0]]];
  let curSols = [];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < sols.length; j++) {
      let currentArray = sols[j];
      for (let k = 0; k <= currentArray.length; k++) {
        curSols.push([
          ...currentArray.slice(0, k),
          nums[i],
          ...currentArray.slice(k),
        ]);
      }
    }
    sols = [...curSols];
    curSols = [];
  }
  return sols;
};

console.log(permutations([1, 2, 3, 4]));
