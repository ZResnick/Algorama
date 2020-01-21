/*
Median Sort
Write a function medianSort() that accepts one argument: an array. The elements of this array can be either numbers or arrays of numbers. The function should return the initial array sorted by the numbers or the median values of the arrays of numbers.
For example:
medianSort([3, [-2, 4, 9]]) à [3, [-2, 4, 9]]
The median of [-2, 4, 9] is 4, so we should sort that array after the 3.
medianSort([[12, 9, 1, 25], 4]) à [4, [12, 9, 1, 25]] The median of [12, 9, 1, 25] is 10.5, and 10.5 is greater than 4.
medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]) à [[-9, -4], [-1], 0, [2.4, 0.2, 9.8]]
The median of [2.4, 0.2, 9.8] is 2.4. The median of [-1] is -1. The median of [-9, -4] is -6.5. Therefore, the sorted order of these medians is [-6.5, -1, 0, 2.4]


*/

//This function finds the median without altering the original array.
const medianNumber = arr => {
  let numbers = [...arr];
  let median = 0;
  let length = numbers.length;
  numbers.sort();
  if (length % 2 === 0) {
    median = (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  } else {
    median = numbers[(length - 1) / 2];
  }
  return median;
};

//this function splits the array
const split = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

//this function takes two sorted arrays and merges them into one sorted array
const merge = (arr1, arr2) => {
  let output = [];
  while (arr1.length && arr2.length) {
    //if the current element is an array, use our medianNumber function to see which is larger, but push in the actual element rather than the median
    let left = Array.isArray(arr2[0]) ? medianNumber(arr2[0]) : arr2[0];
    let right = Array.isArray(arr1[0]) ? medianNumber(arr1[0]) : arr1[0];
    if (left > right) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  return [...output, ...arr1, ...arr2];
};

//This function brings everything together and is the classic implementation of merge sort.
const medianSort = arr => {
  if (arr.length <= 1) return arr;
  let splitted = split(arr);
  let left = medianSort(splitted[0]);
  let right = medianSort(splitted[1]);
  return merge(left, right);
};

console.log(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]));
console.log(medianSort([[12, 9, 1, 25], 4]));
