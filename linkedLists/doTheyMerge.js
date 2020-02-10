/*

Write a program to find the node at which the intersection of two singly linked lists begins.

Input: listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Input: listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.

*/

const doTheyMerge = (headA, headB) => {
  if (!headA || !headB) return null;
  let top = headA;
  let bot = headB;
  //The count tracks how many times we've reached the end of a list.
  //If that happens three times, its false
  let counter = 0;
  while (counter < 3) {
    if (top === bot) return top;
    if (!top.next) {
      top = headB;
      counter++;
    } else {
      top = top.next;
    }
    if (!bot.next) {
      bot = headA;
      counter++;
    } else {
      bot = bot.next;
    }
  }
  return null;
};

const tail = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

const head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: tail,
      },
    },
  },
};

const head2 = {
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
              next: tail,
            },
          },
        },
      },
    },
  },
};

const head3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

const head4 = {
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
              next: null,
            },
          },
        },
      },
    },
  },
};

console.log(doTheyMerge(head1, head2));
console.log(doTheyMerge(head3, head4));
