/* eslint-disable no-loop-func */
/*
Given an weighted-undirected graph and two vertices on that graph, find the shortest path from one vertice to the other.
The test case below looks like this and the shortest path between A and E is A --> C --> D --> F --> E == 6

             4
       A ------- B
      /           \
   2 /             \ 3
    /  2        3   \
   C ----- D ------- E
           |        /
         1 |      / 1
           |    /
           F --

import a priority queue implementation from MinPriorityQueue Constructor
*/
const MinQueue = require('../../heapsPriortiyQueues/minPriorityQueueConstructor.js');

const dijkstrasShortestPathAlgorithm = (list, start, end) => {
  if (start === end) return start;
  let previous = { start: null };
  let visited = { start: true };

  let distances = new MinQueue();
  distances.insert(start, 0);

  //extract the top and begin the while loop, searching for the end to be popped off
  let top = distances.extractTop();
  while (top.val !== end) {
    //mark the top as now having been visited
    visited[top.val] = true;

    //look at the tops neighbors and go through each
    let neighbors = list[top.val];
    neighbors.forEach(neighbor => {
      //make sure it hasnt been visited
      if (!visited[neighbor.node]) {
        //check to see if its in the priorty queue, if it is, check to see if the tops priortiy plus the weight of the neighbor is less than the current priorty and change the previous.
        if (distances[neighbor.node]) {
          if (distances[neighbor.node] > top.priority + neighbor.weight) {
            delete distances[neighbor.node];
            distances.insert(neighbor.node, top.priority + neighbor.weight);
            previous[neighbor.node] = top.val;
          }
        }
        //else add it to the priority queue
        else {
          distances.insert(neighbor.node, top.priority + neighbor.weight);
          previous[neighbor.node] = top.val;
        }
      }
    });
    top = distances.extractTop();
  }
  let totalDistance = top.priority;
  let path = [end];
  while (end !== start) {
    end = previous[end];
    path.unshift(end);
  }

  return [path, totalDistance];
};

const graph = require('../WieghtedGraph');
const graph1 = new graph();
graph1
  .addVertex('a')
  .addVertex('b')
  .addVertex('c')
  .addVertex('d')
  .addVertex('e')
  .addVertex('f')
  .addEdge('a', 'b', 4)
  .addEdge('a', 'c', 2)
  .addEdge('c', 'd', 2)
  .addEdge('b', 'e', 3)
  .addEdge('d', 'e', 3)
  .addEdge('f', 'd', 1)
  .addEdge('e', 'f', 1);

const graph2 = new graph();
graph2
  .addVertex('a')
  .addVertex('b')
  .addVertex('c')
  .addVertex('d')
  .addVertex('e')
  .addVertex('f')
  .addVertex('g')
  .addVertex('h')
  .addEdge('a', 'b', 5)
  .addEdge('a', 'c', 1)
  .addEdge('b', 'c', 6)
  .addEdge('c', 'd', 1)
  .addEdge('c', 'g', 7)
  .addEdge('d', 'e', 1)
  .addEdge('e', 'f', 1)
  .addEdge('h', 'f', 1)
  .addEdge('h', 'g', 1)
  .addEdge('e', 'g', 3);

console.log(dijkstrasShortestPathAlgorithm(graph1.adjacencyList, 'a', 'e'));
console.log(dijkstrasShortestPathAlgorithm(graph2.adjacencyList, 'a', 'h'));
