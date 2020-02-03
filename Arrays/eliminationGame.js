/*
There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
*/

const lastRemaining = n => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  const startAtZero = list => {
    for (let i = 0; i < list.length; i++) {
      list.splice(i, 1);
    }
  };
  const startAtOne = list => {
    for (let i = 1; i < list.length; i++) {
      list.splice(i, 1);
    }
  };
  let count = 0;
  while (arr.length > 1) {
    if (count % 2 === 0) {
      startAtZero(arr);
      count++;
    } else {
      if (arr.length % 2 === 1) {
        startAtZero(arr);
      } else {
        startAtOne(arr);
      }
      count++;
    }
  }
  return arr[0];
};

console.log(lastRemaining(20));
console.log(lastRemaining(456));
console.log(lastRemaining(500));
