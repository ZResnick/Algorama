const newTree = require('./treeCreator');

/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
*/

const mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

const tree = new newTree(10);
tree.insert(5).insert(12);

const tree2 = new newTree(20);
tree2.insert(4).insert(22);

console.log(mergeTrees(tree, tree2));
