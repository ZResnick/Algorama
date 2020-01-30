/* eslint-disable complexity */
class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  //set default limit of 10 if limit is not passed.
  constructor(limit = 10) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  // Write Node to head of LinkedList
  // update cache with Node key and Node reference
  write(key, value) {
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    //Update the cache map
    this.cache[key] = this.head;
    this.size++;
  }

  remove(key) {
    const node = this.cache[key];

    //if theres a previous node, set previous.next to current.next
    //else, the current node is the head so set the this.head to current.next
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    //if theres a next node, set next.prev to current.previous
    //else the current node is the tail so set this.tail = previous.next
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    //delete the element from the cache
    delete this.cache[key];
    this.size--;
  }

  // Read from cache map and make that node as new Head of LinkedList
  read(key) {
    //check if the node exists
    if (this.cache[key]) {
      const value = this.cache[key].value;

      // remove the node with the following key
      this.remove(key);
      // write node again to the head of LinkedList to make it most recently used
      this.write(key, value);
      return value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }

  ensureLimit() {
    if (this.size === this.limit) {
      this.remove(this.tail.key);
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }
  // Invokes the callback function with every node of the chain and the index of the node.
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}
