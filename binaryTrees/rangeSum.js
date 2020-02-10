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

const rangeSumBST = (root, L, R) => {
  let total = 0;
  const helper = node => {
    if (L <= node.val && node.val <= R) total += node.val;
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(root);
  return total;
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
