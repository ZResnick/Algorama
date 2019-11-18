/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

const maxDepth = root => {
  if (!root) return 0;
  let left = 1;
  let right = 1;
  if (root.left) {
    left += maxDepth(root.left);
  }
  if (root.right) {
    right += maxDepth(root.right);
  }
  return Math.max(left, right);
};

const bst = require('./treeCreator');

const tree = new bst(10);
tree
  .insert(9)
  .insert(12)
  .insert(8)
  .insert(15)
  .insert(8)
  .insert(22)
  .insert(2)
  .insert(1);

console.log(maxDepth(tree));
