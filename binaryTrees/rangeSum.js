/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

const rangeSumBST = (root, L, R, total = [0]) => {
  if (L <= root.val && root.val <= R) total[0] += root.val;
  if (root.left) rangeSumBST(root.left, L, R, total);
  if (root.right) rangeSumBST(root.right, L, R, total);
  return total[0];
};

//TEST CASES
const bst = require('./treeCreator');
let tree = new bst(10);
tree
  .insert(5)
  .insert(15)
  .insert(3)
  .insert(7)
  .insert(18);

let tree2 = new bst(10);
tree2
  .insert(5)
  .insert(15)
  .insert(3)
  .insert(7)
  .insert(13)
  .insert(18)
  .insert(1)
  .insert(6);

console.log('32 ---> ?', rangeSumBST(tree, 7, 15));
console.log('23 ---> ?', rangeSumBST(tree2, 6, 10));
