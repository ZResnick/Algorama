/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*/

const arrayCreator = (tree, arr = []) => {
  arr.push(tree.val);
  if (tree.right) arrayCreator(tree.right, arr);
  if (tree.left) arrayCreator(tree.left, arr);
  return arr;
};

const minimumDifference = root => {
  let nums = arrayCreator(root);
  let diffs = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      diffs.push(nums[i] > nums[j] ? nums[i] - nums[j] : nums[j] - nums[i]);
    }
  }
  return Math.min(...diffs);
};

//TEST CASES
const bst = require('./treeCreator');

let tree = new bst(30);
tree
  .insert(50)
  .insert(0)
  .insert(15);

let tree2 = new bst(30);
tree2
  .insert(50)
  .insert(100)
  .insert(31);

console.log(minimumDifference(tree));
console.log(minimumDifference(tree2));
