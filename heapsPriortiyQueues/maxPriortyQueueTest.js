const List = require('/Users/zacharyresnick/Desktop/Algorama/heapsPriortiyQueues/maxPriortyQueueConstructor.js');

const list = new List();

list
  .insert({ name: 'Zach', priority: 1 })
  .insert({ name: 'Joon', priority: 2 })
  .insert({ name: 'Austin', priority: 3 })
  .insert({ name: 'Ally', priority: 4 })
  .insert({ name: 'Molly', priority: 5 })
  .insert({ name: 'Alex', priority: 6 })
  .insert({ name: 'Peter', priority: 7 });

console.log(list);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
console.log('VALUE', list.extractMax(), 'LIST', list.values);
