/*
Given a linked list, reorder it so that all the odd indices are before the even indices
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
becomes
1 -> 3 -> 5 -> 7 -> 2 -> 4 -> 6 -> null
*/

const reorder = head => {
  if (!head || !head.next) return head;
  let oddHead = head;
  let evenHead = head.next;
  let currentEven = evenHead;
  let currentOdd = oddHead;
  let count = 0;
  let current = evenHead.next;

  while (current) {
    if (count % 2 === 0) {
      currentOdd.next = current;
      currentOdd = currentOdd.next;
    } else {
      currentEven.next = current;
      currentEven = currentEven.next;
    }
    current = current.next;
    count++;
  }
  currentEven.next = null;
  currentOdd.next = evenHead;
  return oddHead;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: { val: 5, next: { val: 6, next: { val: 7, next: null } } },
      },
    },
  },
};

console.log(reorder(head));
