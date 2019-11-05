/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
- Given n will always be valid.
- Must be completed in one pass

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy.next;
  let second = dummy.next;
  for (let i = 0; i < n; i++) {
    second = second.next;
  }
  if (!second) {
    return dummy.next.next;
  }
  while (second.next) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
  return dummy.next;
};

const input = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10,
                    next: {
                      val: 11,
                      next: null,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const input2 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

console.log(removeNthFromEnd(input, 10));
console.log(removeNthFromEnd(input2, 1));
