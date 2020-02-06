/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

const invertTree = root => {
  if (!root) return root;
  let left = root.left;
  root.left = root.right;
  root.right = left;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};

//For test cases see: https://leetcode.com/problems/invert-binary-tree/
