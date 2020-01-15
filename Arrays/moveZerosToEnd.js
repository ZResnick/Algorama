/*
Given an array of integers, move all the zeros to the end while maintaining the order of all other characters.  This must be done IN PLACE
*/

const moveZeroes = nums => {
  let i = 0;
  let count = 0;
  while (i < nums.length - count) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
      count++;
    } else i++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 2, 0, 3]));
console.log(moveZeroes([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]));
console.log(moveZeroes([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(moveZeroes([1, 2, 3]));
console.log(moveZeroes([0, 0, 0]));
