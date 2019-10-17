/*
You are given an array of integers, representing the total potential size of a jump you may take from that element. For example, if the value at array[0] is 3, you may take 1, 2, or 3 steps forward.

Complete the function min-jumps which should return the minimum numbers of jumps to cross the array from the value at array[0] to the final index of the array.

Note that traveling from index i, to index i + n always counts as 1 jump, no matter how big that jump was.

Example:
-->1 --->2>3-------->4
[2,4,1,1,2,3,7,1,1,3] => 4 total jumps

jump from 2 -> 4 (1 space)
jump from 4 -> 2 (3 spaces)
jump from 2 -> 7 (2 spaces)
jump from 7 -> end (4 spaces)
Note that it's okay if your last jump exceeds the final index of the array. The indices used may vary, but the same minimum number of jumps will remain consistent for any array.
*/

// const minJumps = arr => {
//   let counter = 1;
//   if (arr.length === 1) return counter - 1;
//   let table = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] + i + 1 >= arr.length) {
//       table.push(i);
//     }
//   }
//   return (counter += minJumps(arr.slice(0, table[table.length - 1] + 1)));
// };

const minJumps = arr => {
  let counter = 0;
  while (arr) {
    let indicies = [];
    let target = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      let curEl = arr[i];
      if (curEl + i >= target) {
        indicies.push(i);
      }
    }
    counter++;
    arr = arr.slice(0, indicies[indicies.length - 1] + 1);
    if (arr.length === 1) {
      return counter;
    }
  }
};

const test1 = [1, 1];
const test2 = [6, 3, 2, 1];
const test3 = [2, 8, 4, 3, 2, 9, 6, 8];
const test4 = [4, 4, 2, 7, 1, 1, 1, 1, 3, 7, 2];
const test5 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3];
const test6 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3, 1, 1, 1, 1, 1, 17];
const test7 = [16, 4, 1, 1, 2, 3, 7, 1, 1, 3];
const test10 = [1, 3, 1, 1, 1, 1];

console.log('1---------->', minJumps(test1));
console.log('1---------->', minJumps(test2));
console.log('2---------->', minJumps(test3));
console.log('2---------->', minJumps(test4));
console.log('4---------->', minJumps(test5));
console.log('6---------->', minJumps(test6));
console.log('1---------->', minJumps(test7));
console.log('3---------->', minJumps(test10));
