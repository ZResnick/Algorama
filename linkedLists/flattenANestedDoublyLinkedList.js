/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.



Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:
*/

const flatten = head => {
  let current = head;
  while (current) {
    let next = current.next;
    if (current.child) {
      let childNode = flatten(current.child);
      current.next = childNode;
      childNode.prev = current;
      current.child = null;
      while (current.next) {
        current = current.next;
      }
      if (next) next.prev = current;
      current.next = next;
    }
    current = current.next;
  }
  return head;
};

//test cases can be found here: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
