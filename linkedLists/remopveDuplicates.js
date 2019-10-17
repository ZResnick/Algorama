/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let temp = head;
  while (head.next) {
    if (head.next.val === head.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return temp;
};

const input = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {
            val: 3,
            next: {
              val: 3,
              next: {
                val: 3,
                next: {
                  val: 3,
                  next: {
                    val: 3,
                    next: {
                      val: 5,
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

console.log(deleteDuplicates(input));
