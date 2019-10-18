/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  let newList = {};
  let curHead = newList;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curHead.val = l1.val;
      curHead.next = {};
      l1 = l1.next;
    } else {
      curHead.val = l2.val;
      curHead.next = {};
      l2 = l2.next;
    }
    curHead = curHead.next;
  }
  if (!l1) {
    curHead.val = l2.val;
    curHead.next = l2.next;
  }
  if (!l2) {
    curHead.val = l1.val;
    curHead.next = l1.next;
  }
  return newList;
};

const input1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null,
    },
  },
};

const input2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null,
    },
  },
};

console.log(mergeTwoLists(input1, input2));
