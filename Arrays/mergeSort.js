/*
Given an unsorted array, sort it using merge sort
*/

function split(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(arr1, arr2) {
  let output = [];
  while (arr1.length && arr2.length) {
    if (arr2[0] > arr1[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  return [...output, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let splitted = split(arr);
  let left = mergeSort(splitted[0]);
  let right = mergeSort(splitted[1]);
  return merge(left, right);
}

let test1 = [
  432,
  6,
  6,
  9,
  780,
  457,
  214,
  6,
  4,
  3,
  4685,
  86,
  534,
  1,
  3,
  6,
  45,
  75,
  685,
  97,
  87,
  421312,
  9,
];

console.log(mergeSort(test1));
