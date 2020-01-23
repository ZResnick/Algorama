/*
Write a function solution that, given an array A consisting of N integers, returns the maximum sum of two numbers whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum, the function should return -1.
Examples:
Given A = [51, 71, 17, 42], the function should return 93. There are two pairs of numbers whose digits add up to an equal sum: (51, 42) and (17, 71). The first pair sums up to 93.
Given A = [42, 33, 60], the function should return 102. The digits of all the numbers in A add up to the same sum, and choosing to add 42 and 60 gives the result 102.
Given A = [51, 32, 43], the function should return -1, since all numbers in A have digits that add up to different, unique sums.
*/

//naive appraoch because its n*n
const maxSumOfEqualSums = arr => {
  let max = -1;
  let count = 0;
  let sumOfDigits = num => {
    return num
      .toString()
      .split('')
      .reduce((acc, el) => Number(el) + Number(acc));
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let left = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      let right = arr[j];
      if (sumOfDigits(left) === sumOfDigits(right) && left + right > max)
        max = left + right;
    }
  }
  console.log('Total iterations: ', count);
  return max;
};

//better approach
const maxSumOfEqualSumsBetter = arr => {
  let max = -1;
  let count = 0;
  let sumOfDigits = num => {
    return num
      .toString()
      .split('')
      .reduce((acc, el) => Number(el) + Number(acc));
  };
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let digitSum = sumOfDigits(current);
    if (hash[digitSum]) {
      let matches = hash[digitSum];
      for (let j = 0; j < matches.length; j++) {
        if (current + matches[j] > max) max = current + matches[j];
        count++;
      }
      hash[digitSum].push(current);
    } else {
      hash[digitSum] = [current];
    }
  }
  console.log('Total iterations: ', count);
  return max;
};

console.log('Naive');
console.log(93 === maxSumOfEqualSums([51, 71, 17, 42]));
console.log(-1 === maxSumOfEqualSums([51, 32, 43]));
console.log(
  135654 ===
    maxSumOfEqualSums([
      51,
      32,
      123456,
      43,
      43,
      547,
      644,
      345,
      6,
      457,
      546,
      3463,
      7354,
      7465,
      745346,
      33232,
      46,
      5,
      4453,
      3,
      56,
      7,
      74,
      5,
      65,
      6,
      43,
      4,
      54,
      64,
      6,
      53,
      4,
      34,
      12198,
    ])
);

console.log('Optimized');
console.log(93 === maxSumOfEqualSumsBetter([51, 71, 17, 42]));
console.log(-1 === maxSumOfEqualSumsBetter([51, 32, 43]));
console.log(
  135654 ===
    maxSumOfEqualSumsBetter([
      51,
      32,
      123456,
      43,
      43,
      547,
      644,
      345,
      6,
      457,
      546,
      3463,
      7354,
      7465,
      745346,
      33232,
      46,
      5,
      4453,
      3,
      56,
      7,
      74,
      5,
      65,
      6,
      43,
      4,
      54,
      64,
      6,
      53,
      4,
      34,
      12198,
    ])
);
