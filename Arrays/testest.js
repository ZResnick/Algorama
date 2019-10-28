const split = arr => {
  if (arr.length === 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

const merge = (arr1, arr2) => {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return [...sorted, ...arr1, ...arr2];
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let splitted = split(arr);
  let left = mergeSort(splitted[0]);
  let right = mergeSort(splitted[1]);
  return merge(left, right);
};

let test = [0];
let test1 = [0, 43, 6, 64, 243];
let test3 = [0, 532, 3, 222, 5];
let test2 = [0, 542, 542, 254, 245, 265, 7, -1];
let test4 = [0, -32, -64, 364, 364];
let test5 = [0, 2498725, 5209825, 52, -1];
let test6 = [0, 43, 5, 6, 57, 86, 5];

console.log(mergeSort(test));
console.log(mergeSort(test1));
console.log(mergeSort(test2));
console.log(mergeSort(test3));
console.log(mergeSort(test4));
console.log(mergeSort(test5));
console.log(mergeSort(test6));
