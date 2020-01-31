/* eslint-disable complexity */
/*
Initially you are given a number that you should consider as terminating
 number. Given a continuous stream of numbers, write a function or class that
 returns the first unique number whenever terminating number is reached.
 The return should be in O(1) time

 Example:
 Terminating Number = 8
 Stream = 1,2,3,4,5,6,7,4,3,2,1,8
 Return 5
 Explanation:  5 was the first unique number given to us.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class FirstUnique {
  constructor(terminatingNumber) {
    this.terminatingNumber = terminatingNumber;
    this.head = null;
    this.tail = null;
    this.nums = {};
  }

  add(val) {
    if (val === this.terminatingNumber) return this.tail.val;

    if (!this.tail && !this.nums[val]) {
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.nums[val] = newNode;
    } else if (!this.nums[val]) {
      let newNode = new Node(val);
      newNode.next = this.head;
      if (this.head) this.head.previous = newNode;
      this.head = newNode;
      this.nums[val] = newNode;
    } else {
      let currentNode = this.nums[val];
      if (this.head === currentNode && this.tail === currentNode) {
        this.tail = null;
        this.head = null;
      } else if (this.head === currentNode) {
        this.head = currentNode.next;
      } else if (currentNode === this.tail) {
        currentNode.previous.next = null;
        this.tail = currentNode.previous;
      } else {
        currentNode.previous.next = currentNode.next;
      }
    }
    return this;
  }

  peekNums(val) {
    return this.nums[val];
  }

  peekTail() {
    return this.tail;
  }

  peekHead() {
    return this.head;
  }

  peekFirstUnique() {
    return this.tail.val;
  }
}

let test = new FirstUnique(8);
test.add(1);
test.add(2);
test.add(3);
test.add(4);
test.add(5);
test.add(1);
test.add(6);
test.add(2);
test.add(3);
test.add(9);
console.log(test.add(8));

let test2 = new FirstUnique(20);
test2
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
  .add(7)
  .add(13) //first unique
  .add(65)
  .add(444)
  .add(45)
  .add(78);
console.log(test2.add(20));
