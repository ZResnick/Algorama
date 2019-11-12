/*

Given a graph represented as an adjacency list, find if a path exists between two vertices.  Return true if a path exists, and false if not.

Example 1: graph = {
  'a': ['b', 'c'],
  'b': ['c'],
  'c': ['a', 'd'],
  'd': ['d']
}, start = 'd', end = 'a' should return false

Example 1: graph = {
  'a': ['b', 'c'],
  'b': ['c'],
  'c': ['d', 'a'],
  'd': ['d']
}, start = 'a', end = 'd' should return true

*/

const doesPathExist = (graph, start, end, memo = {}) => {
  let connections = graph[start];
  for (let i = 0; i < connections.length; i++) {
    let curVer = connections[i];
    if (curVer === end) return true;
    else if (curVer && !memo[curVer]) {
      memo[curVer] = true;
      if (doesPathExist(graph, curVer, end, memo)) return true;
    }
  }
  return false;
};

let input1 = {
  a: ['b', 'c', 'q'],
  b: [],
  c: ['d', 'b', 'a', 'e'],
  d: ['d'],
  e: ['c'],
  q: [],
};

let input2 = {
  a: ['c'],
  b: ['a', 'q', 'd'],
  c: ['b'],
  d: ['d', 'f'],
  e: ['g'],
  f: ['d', 'e'],
  g: ['c'],
  q: ['b'],
  l: ['e'],
};

console.log(doesPathExist(input1, 'a', 'd'));
console.log(doesPathExist(input2, 'a', 'l'));
