/*
A parent node at index = k has children at 2k + 1 and 2k + 2. A child node at
index = i has a parent at Math.floor(i - 1)/2
*/

module.exports = class maxPriortyQueue {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let heap = this.values;
    heap.push(value);
    let curIdx = this.values.length - 1;
    while (heap[Math.floor((curIdx - 1) / 2)] < heap[curIdx]) {
      let temp = heap[Math.floor((curIdx - 1) / 2)];
      heap[Math.floor((curIdx - 1) / 2)] = heap[curIdx];
      heap[curIdx] = temp;
      curIdx = Math.floor((curIdx - 1) / 2);
    }
    return this;
  }

  extractMax() {
    let heap = this.values;
    let val = heap.shift();
    heap.unshift(heap.pop());
    let i = 0;
    while (heap[i] < Math.max(heap[2 * i + 2], heap[2 * i + 1])) {
      let bigChildIdx =
        heap[2 * i + 2] >= heap[2 * i + 1] ? 2 * i + 2 : 2 * i + 1;
      let temp = heap[bigChildIdx];
      heap[bigChildIdx] = heap[i];
      heap[i] = temp;
      i = bigChildIdx;
    }
    return val;
  }
};
