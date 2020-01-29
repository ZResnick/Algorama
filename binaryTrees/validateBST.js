/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

var isValidBST = root => {
  if (!root) return true;
  let helper = (node, nums = []) => {
    if (node.left) helper(node.left, nums);
    nums.push(node.val);
    if (node.right) helper(node.right, nums);
    return nums;
  };

  let list = helper(root);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] >= list[i + 1]) return false;
  }
  return true;
};

const bst = require('./treeCreator');
let tree = new bst(25);
let tree2 = new bst(25);

tree
  .insert(5)
  .insert(2)
  .insert(325)
  .insert(64)
  .insert(4)
  .insert(436)
  .insert(3)
  .insert(1)
  .insert(25);
tree2
  .insert(5)
  .insert(2)
  .insert(325)
  .insert(64)
  .insert(6)
  .insert(436)
  .insert(3)
  .insert(1)
  .insert(22222);

console.log(false === isValidBST(tree));
console.log(true === isValidBST(tree2));
