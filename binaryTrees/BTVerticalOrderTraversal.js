/*
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
*/

var verticalOrder = function(root) {
  if (!root) return [];
  let middleIdx = 0;
  let maxIdx = 0;
  let head = root;
  let helper = (node, currIdx) => {
    if (currIdx < middleIdx) middleIdx = currIdx;
    if (node) {
      if (node.left) {
        helper(node.left, currIdx - 1);
      }
      if (node.right) {
        helper(node.right, currIdx + 1);
      }
    }
  };
  helper(head, 0);
  middleIdx = Math.abs(middleIdx);
  let cols = {};
  root.idx = middleIdx;
  let q = [root];
  while (q.length) {
    let current = q.shift();
    let currIdx = current.idx;
    if (currIdx > maxIdx) maxIdx = currIdx;
    if (cols[currIdx]) cols[currIdx].push(current.val);
    else cols[currIdx] = [current.val];
    if (current.left) {
      current.left.idx = currIdx - 1;
      q.push(current.left);
    }
    if (current.right) {
      current.right.idx = currIdx + 1;
      q.push(current.right);
    }
  }
  let final = [];
  for (let i = 0; i <= maxIdx; i++) {
    final.push(cols[i]);
  }
  return final;
};

// for test cases see: https://leetcode.com/problems/binary-tree-vertical-order-traversal/
//passes all specs with 96% fastest time and 100% best memory
