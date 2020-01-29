/* eslint-disable complexity */
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode();
  let currHead = list;
  let carry = 0;
  while (l1 || l2) {
    let number = 0;
    if (l1) number += l1.val;
    if (l2) number += l2.val;
    if (carry) number += carry;
    if (number >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    currHead.val = number % 10;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    if (l1 || l2) {
      currHead.next = new ListNode();
      currHead = currHead.next;
    }
  }
  if (carry) {
    currHead.next = new ListNode(1);
  }
  currHead = null;
  return list;
};

let num1 = { val: 7, next: { val: 5, next: { val: 3, next: null } } };
let num2 = { val: 2, next: { val: 7, next: { val: 8, next: null } } };

console.log(357 + 872);
console.log(addTwoNumbers(num1, num2));
