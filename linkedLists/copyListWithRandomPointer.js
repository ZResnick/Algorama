/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, randomNode] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


APPROACH:
  move the current pointer back to the beginning
  iterate through the original list again using the dummy as the start
  if there is no random on he original list node, do nothing because all the replicas are instantiated with null
  if there is a random, get the index of the randomNode pointer, and se the current.random to the array at that index
  move the pointers forward
  iterate through the list
  at each node, create a new node "equal" to it
  push that node into the array
  set the current.next to the new node and then iterate the current
  add an index to the original list node so it will correspond to the newNode index in the array
  increase the counter to increase the index
  create a new head
  add that newHead to an array so we can then access it using an index later
  create a dummy head to use later
  create a counter to keep track of indexes
  set the index of the heads to zero
  move the head
*/

var copyRandomList = function(head) {
  if (!head) return head;
  let newHead = new Node(head.val, null, null);
  let current = newHead;
  let array = [newHead];
  let dummy = head;
  let counter = 1;
  head.index = 0;
  head = head.next;
  while (head) {
    let newNext = new Node(head.val, null, null);
    array.push(newNext);
    current.next = newNext;
    current = current.next;
    head.index = counter;
    head = head.next;
    counter++;
  }
  current = newHead;
  while (dummy) {
    if (!dummy.random) {
      current.random = null;
    } else {
      let index = dummy.random.index;
      current.random = array[index];
    }
    current = current.next;
    dummy = dummy.next;
  }

  return newHead;
};

//fot test cases see: https://leetcode.com/problems/copy-list-with-random-pointer/
