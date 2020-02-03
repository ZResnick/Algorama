/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

class RandomizedSet {
  constructor() {
    this.cache = {};
    this.list = [];
  }

  //Inserts a value to the set. Returns true if the set did not already contain the specified element.
  insert(val) {
    if (this.cache[val] >= 0) return false;
    else {
      this.list.push(val);
      this.cache[val] = this.list.length - 1;
      return true;
    }
  }

  //Removes a value from the set. Returns true if the set contained the specified element.
  remove(val) {
    if (this.cache[val] >= 0) {
      let index = this.cache[val];
      let lastIndex = this.list.length - 1;
      let lastListElement = this.list[lastIndex];
      this.cache[lastListElement] = index;
      this.list.splice(index, 1, lastListElement);
      this.list.pop();
      delete this.cache[val];
      return true;
    } else {
      return false;
    }
  }

  //Get a random element from the set.
  getRandom() {
    let size = this.list.length;
    let randomIndex = Math.floor(Math.random() * size);
    return this.list[randomIndex];
  }
}

let randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(true === randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.log(false === randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(true === randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
let returned = randomSet.getRandom();
console.log(1 === returned || 2 === returned);

// Removes 1 from the set, returns true. Set now contains [2].
console.log(true === randomSet.remove(1));

// 2 was already in the set, so return false.
console.log(false === randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(2 === randomSet.getRandom());

//return should be (true, false, true, (1 or 2), true, false, 2)
