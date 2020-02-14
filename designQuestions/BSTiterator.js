/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Example:

BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false


Note:
next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.
*/

class BSTIterator {
  constructor(root) {
    this.list = this.initialize(root);
  }

  next() {
    return this.list.shift();
  }

  hasNext() {
    if (this.list.length) return true;
    return false;
  }

  initialize(root) {
    if (!root) return [];
    let array = [];
    const helper = node => {
      if (node.left) helper(node.left);
      array.push(node.val);
      if (node.right) helper(node.right);
    };
    helper(root);
    return array;
  }
}

//for test cases see:  https://leetcode.com/problems/binary-search-tree-iterator/
