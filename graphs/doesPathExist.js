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
const graph = require('./directedGraph.js');

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

let input1 = new graph();
input1
  .addVertex('a')
  .addVertex('b')
  .addVertex('c')
  .addVertex('d')
  .addVertex('e')
  .addVertex('q')
  .addEdge('a', 'b')
  .addEdge('a', 'c')
  .addEdge('a', 'q')
  .addEdge('c', 'b')
  .addEdge('c', 'd')
  .addEdge('c', 'a')
  .addEdge('c', 'e')
  .addEdge('d', 'd')
  .addEdge('e', 'c');

let input2 = new graph();
input2
  .addVertex('a')
  .addVertex('b')
  .addVertex('c')
  .addVertex('d')
  .addVertex('e')
  .addVertex('f')
  .addVertex('g')
  .addVertex('q')
  .addVertex('l')
  .addEdge('a', 'c')
  .addEdge('b', 'a')
  .addEdge('b', 'q')
  .addEdge('b', 'd')
  .addEdge('c', 'b')
  .addEdge('d', 'd')
  .addEdge('d', 'f')
  .addEdge('e', 'g')
  .addEdge('f', 'd')
  .addEdge('f', 'e')
  .addEdge('g', 'c')
  .addEdge('q', 'b')
  .addEdge('l', 'e');

console.log(doesPathExist(input1.adjacencyList, 'a', 'd'));
console.log(doesPathExist(input2.adjacencyList, 'a', 'l'));
