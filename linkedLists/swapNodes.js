/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

//Recursive Solution
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let nextNode = head.next;
  head.next = nextNode.next;
  nextNode.next = head;
  if (head.next) {
    head.next = swapPairs(head.next);
  }
  return nextNode;
};

const head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};

console.log(swapPairs(head));
