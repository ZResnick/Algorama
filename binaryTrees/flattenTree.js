/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

var flatten = function(root) {
  //pre-order traversal: store all the nodes in an array
  //iterate over array changing left to null and the right to i+1
  if (!root) return root;
  let helper = (node, arr = []) => {
    arr.push(node);
    if (node.left) helper(node.left, arr);
    if (node.right) helper(node.right, arr);
    return arr;
  };
  let nodes = helper(root);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  return nodes[0];
};

//for test cases see:  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
