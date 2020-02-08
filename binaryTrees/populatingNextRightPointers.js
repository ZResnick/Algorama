/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.


Example 1:



Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

*/

const connect = root => {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (i < size - 1) current.next = queue[0];
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return root;
};

//for test cases see: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
