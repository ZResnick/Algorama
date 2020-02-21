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

const minJumps = arr => {
  //start the dp array at infinities
  let dp = Array(arr.length).fill(Infinity);
  //make the first el of dp zero because you can get there in 0 steps
  dp[0] = 0;

  //run though the elements of the array
  for (let i = 0; i < arr.length; i++) {
    //if the last el of the dp array ahs been changed, return it.
    if (dp[arr.length - 1] < Infinity) {
      console.log(dp);
      return dp[arr.length - 1];
    }
    //store the jump range
    let curJump = arr[i];
    //store the current dp value at that place
    let minJumpsToPlace = dp[i];

    //go though the dp array ahead of the current location by the amount of possible jumps
    for (let j = i + 1; j < i + curJump + 1 && j < arr.length; j++) {
      //if the minJumps at place + 1 is less than the current minJumps, change it
      if (minJumpsToPlace + 1 < dp[j]) dp[j] = minJumpsToPlace + 1;
    }
  }
  console.log(dp);
  //return the last element
  return dp[arr.length - 1];
};

// const test1 = [1, 1];
// const test2 = [6, 3, 2, 1];
// const test3 = [2, 8, 4, 3, 2, 9, 6, 8];
// const test4 = [4, 4, 2, 7, 1, 1, 1, 1, 3, 7, 2];
// const test5 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3];
// const test6 = [2, 4, 1, 1, 2, 3, 7, 1, 1, 3, 1, 1, 1, 1, 1, 17];
// const test7 = [16, 4, 1, 1, 2, 3, 7, 1, 1, 3];
// const test10 = [1, 3, 1, 1, 1, 1];
const test11 = [4, 2, 1, 3, 1, 1, 2, 4, 1, 1];

// console.log('1---------->', minJumps(test1));
// console.log('1---------->', minJumps(test2));
// console.log('2---------->', minJumps(test3));
// console.log('2---------->', minJumps(test4));
// console.log('4---------->', minJumps(test5));
// console.log('6---------->', minJumps(test6));
// console.log('1---------->', minJumps(test7));
// console.log('3---------->', minJumps(test10));
console.log('3---------->', minJumps(test11));
