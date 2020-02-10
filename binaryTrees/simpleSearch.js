/*
Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2
     / \
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
*/

const searchBST = (root, val) => {
  if (root.val === val) return root;
  if (root.left) {
    let tree = searchBST(root.left, val);
    if (tree) return tree;
  }
  if (root.right) {
    let tree = searchBST(root.right, val);
    if (tree) return tree;
  }
  return null;
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

console.log(searchBST(tree, 15));
console.log(searchBST(tree2, 7));
console.log(searchBST(tree2, 65));
