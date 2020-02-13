/* eslint-disable complexity */

//My best attempt
class Node2 {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.size = 0;
    this.tail = { next: null, prev: null };
    this.head = { next: this.tail, prev: null };
    this.tail.prev = this.head;
  }

  put(key, value) {
    if (this.cache[key]) {
      let node = this.cache[key];
      node.val = value;
      this.get(key);
    } else {
      let node = new Node2(key, value);
      this.trim();
      let first = this.head.next;
      this.head.next = node;
      node.prev = this.head;
      node.next = first;
      first.prev = node;
      this.size++;
      this.cache[key] = node;
    }
  }

  get(key) {
    if (this.cache[key]) {
      let node = this.cache[key];
      let next = node.next;
      let prev = node.prev;
      prev.next = next;
      next.prev = prev;
      let first = this.head.next;
      this.head.next = node;
      node.prev = this.head;
      node.next = first;
      first.prev = node;
      return node.val;
    }
    return -1;
  }

  trim() {
    if (this.size === this.capacity) {
      let last = this.tail.prev;
      let secondToLast = last.prev;
      this.tail.prev = secondToLast;
      secondToLast.next = this.tail;
      this.size--;
      delete this.cache[last.key];
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }

  //runs a function on each value and includes the relative index of that value
  forEach(fn) {
    let node = this.head.next;
    let counter = 0;
    while (node !== this.tail) {
      fn(node.val, counter);
      node = node.next;
      counter++;
    }
  }
}

/*









A different but similar approach
*/
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

    //deal with the previous
    //if theres a previous node, set previous.next to current.next
    //else, the current node is the head so set the this.head to current.next
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    //deal with the next
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

  // Read from cache map and redefine that node as new Head of LinkedList
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
