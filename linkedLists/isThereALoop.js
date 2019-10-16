/*
Given a linked list, determine if it has a cycle in it.

ex:  1 -> 2 -> 3 -> 4 -> 6 -> 9 -> 4 -> 6 -> 9 -> 4 -> ... === true
*/

var hasCycle = function(head) {
  console.log(head);
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

console.log(hasCycle);

//Cant recreate a looped linked list here but it works https://leetcode.com/problems/linked-list-cycle/
