const Heap = require('./maxHeapConstructor.js');

const heap = new Heap();

heap
  .insert(1)
  .insert(2)
  .insert(3)
  .insert(4)
  .insert(5)
  .insert(6)
  .insert(7);

console.log(heap.extractMax(), heap.values);
console.log(heap.extractMax(), heap.values);
console.log(heap.extractMax(), heap.values);
console.log(heap.extractMax(), heap.values);
console.log(heap.extractMax(), heap.values);
console.log(heap.extractMax(), heap.values);
