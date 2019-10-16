/*
Reverse a singly linked list and return the new head

Example:

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL




1, 2, 3, 4, 5
2, 1,    3, 4, 5
3, 2, 1   4, 5
*/

/* First Attemp which works
var reverseList = function(head) {
  let temp = [];
  while (head) {
    temp.push(head.val);
    head = head.next;
  }

  let node = {};
  let newHead = null;
  for (let i = 0; i < temp.length; i++) {
    let curEl = temp[i];
    node.val = curEl;
    node.next = newHead;
    newHead = node;
    node = {};
  }
  return newHead;
};
*/

//Better Attempt:
var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const input = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

console.log(reverseList(input));
