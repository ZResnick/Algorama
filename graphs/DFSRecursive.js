/*
Given an adjaceny list and a starting node, return an array of the values of eachg node in a DFS PreOrder Traversal order.
*/

const DFS = (list, start, arr, memo = {}) => {
  if (list[start] && !memo[start]) {
    memo[start] = true;
    arr.push(start);
  }
  if (list[start].length) {
    list[start].forEach(el => {
      if (!memo[el]) DFS(list, el, arr, memo);
    });
  }
};

const dfsRecursive = (graph, start) => {
  let list = graph.adjacencyList;
  let DFSResult = [];
  if (!list[start]) return DFSResult;
  DFS(list, start, DFSResult);
  return DFSResult;
};

const graph = require('./nonDirectedGraph.js');
const graph1 = new graph();
graph1
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F');
graph1
  .addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'E')
  .addEdge('D', 'E')
  .addEdge('D', 'F')
  .addEdge('E', 'F');

const graph2 = new graph();
graph2
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F');
graph2
  .addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'E')
  .addEdge('C', 'D')
  .addEdge('C', 'F')
  .addEdge('E', 'F');

console.log(dfsRecursive(graph1, 'A'));
console.log(dfsRecursive(graph2, 'A'));
