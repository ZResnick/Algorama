const List = require('/Users/zacharyresnick/Desktop/Algorama/heapsPriortiyQueues/maxPriortyQueueConstructor.js');

const list = new List();

list
  .insert('Zach', 1)
  .insert('Joon', 2)
  .insert('Austin', 3)
  .insert('Ally', 4)
  .insert('Molly', 5)
  .insert('Alex', 6)
  .insert('Peter', 7);

console.log(list);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
console.log('VALUE', list.extractTop(), 'LIST', list.values);
