/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

const levelOrderBottom = root => {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [root];
  while (queue.length) {
    let level = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(level);
  }
  return result;
};

let tree = {
  val: 3,
  right: {
    val: 10,
    right: {
      val: 4,
      right: null,
      left: null,
    },
    left: {
      val: 31,
      right: null,
      left: null,
    },
  },
  left: {
    val: 5,
    right: {
      val: 16,
      right: null,
      left: null,
    },
    left: {
      val: 1,
      right: null,
      left: null,
    },
  },
};

console.log(levelOrderBottom(tree));
