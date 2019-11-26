module.exports = class maxPriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(item) {
    let list = this.values;
    list.push(item);
    if (list.length > 1) {
      let curIdx = this.values.length - 1;
      while (
        list[Math.floor((curIdx - 1) / 2)].priority < list[curIdx].priority
      ) {
        let temp = list[Math.floor((curIdx - 1) / 2)];
        list[Math.floor((curIdx - 1) / 2)] = list[curIdx];
        list[curIdx] = temp;
        curIdx = Math.floor((curIdx - 1) / 2)
          ? Math.floor((curIdx - 1) / 2)
          : 1;
      }
    }
    return this;
  }

  extractMax() {
    let list = this.values;
    let item = list.shift();
    list.unshift(list.pop());
    let i = 0;
    while (
      list[i] &&
      list[i].priority <
        Math.max(
          list[2 * i + 2] && list[2 * i + 2].priority,
          list[2 * i + 1] && list[2 * i + 1].priority
        )
    ) {
      let bigChildIdx =
        list[2 * i + 2].priority >= list[2 * i + 1].priority
          ? 2 * i + 2
          : 2 * i + 1;
      let temp = list[bigChildIdx];
      list[bigChildIdx] = list[i];
      list[i] = temp;
      i = bigChildIdx;
    }
    return item;
  }
};
