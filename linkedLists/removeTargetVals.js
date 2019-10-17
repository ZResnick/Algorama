/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

var removeElements = function(head, val) {
  if (!head) return -1;
  if (!head.next && head.val === val) return -1;
  let returnVar = head;
  while (head && head.next) {
    if (head.val === val) {
      returnVar = head.next;
    } else if (head.next.val === val) {
      head.next = head.next.next;
    }
    head = head.next;
  }
  return returnVar;
};

const input = {
  val: 34,
  next: {
    val: 34,
    next: {
      val: 2,
      next: {
        val: 34,
        next: { val: 50, next: { val: 34, next: { val: 4, next: null } } },
      },
    },
  },
};

console.log(removeElements(input, 34));
