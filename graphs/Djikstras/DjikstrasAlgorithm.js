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

  //instantiate the previous list with the start node having a value of null
  //this list will aggregate every node touched and the node it is closest to.
  //If another Node is closer, that noide will replace the value
  let previous = { start: null };

  //we keep track of the nodes we've visited because once we've seen it,
  //we know we cant get a shorter path to it.
  let visited = { start: true };

  //create a minimum priority queue with distances
  //Instantiate that queue with the start node
  let distances = new MinQueue();
  distances.insert(start, 0);

  //extract the top and begin the while loop, searching for the end to be popped off
  //as on line 29, once we hit the top, we've found the shortest distance to it
  let top = distances.extractTop();
  while (top.val !== end) {
    //mark the top as now having been visited so we never traverse back to it
    visited[top.val] = true;

    //look at the tops neighbors in its adjacency matrix and go through each
    let neighbors = list[top.val];
    neighbors.forEach(neighbor => {
      //make sure it hasn't been visited
      if (!visited[neighbor.node]) {
        //check to see if its in the priorty queue, if it is, check to see if the tops priortiy plus the weight of the neighbor is less than the current priorty and change the previous.
        let i = distances.values.findIndex(el => el.val === neighbor.node);
        if (i >= 0) {
          if (distances.values[i].priority > top.priority + neighbor.weight) {
            //find the index of the one youre looking for.   i
            //switch that with the last of the array
            //pop the end off
            //bubble down the one you switched
            let refOfFound = distances.values[i];
            let refOfLast = distances.values[distances.values.length - 1];
            distances.values[i] = refOfLast;
            distances.values[distances.values.length - 1] = refOfFound;
            distances.values.pop();
            distances.sinkDown(i);
            //reinsert the updated node (keep line below!!)
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

const test = new graph();
test.addVertex('A');
test.addVertex('B');
test.addVertex('C');
test.addVertex('D');
test.addVertex('E');
test.addVertex('F');
test.addEdge('A', 'C', 2);
test.addEdge('A', 'B', 4);
test.addEdge('B', 'E', 3);
test.addEdge('E', 'D', 3);
test.addEdge('C', 'D', 2);
test.addEdge('D', 'F', 1);
test.addEdge('F', 'C', 4);
test.addEdge('F', 'E', 1);

const test2 = new graph();
test2.addVertex('A');
test2.addVertex('B');
test2.addVertex('C');
test2.addVertex('D');
test2.addVertex('E');
test2.addVertex('F');
test2.addVertex('G');
test2.addEdge('A', 'B', 1);
test2.addEdge('A', 'C', 3);
test2.addEdge('A', 'F', 10);
test2.addEdge('G', 'B', 2);
test2.addEdge('G', 'D', 12);
test2.addEdge('F', 'D', 1);
test2.addEdge('F', 'E', 2);
test2.addEdge('B', 'C', 1);
test2.addEdge('B', 'D', 7);
test2.addEdge('B', 'E', 5);
test2.addEdge('C', 'D', 9);
test2.addEdge('C', 'E', 3);
test2.addEdge('D', 'E', 2);

const test3 = new graph();
test3.addVertex('Home');
test3.addVertex('A');
test3.addVertex('B');
test3.addVertex('C');
test3.addVertex('D');
test3.addVertex('E');
test3.addVertex('F');
test3.addVertex('Fullstack Academy');
test3.addEdge('Home', 'A', 3);
test3.addEdge('Home', 'B', 2);
test3.addEdge('Home', 'C', 5);
test3.addEdge('A', 'D', 3);
test3.addEdge('B', 'D', 1);
test3.addEdge('B', 'E', 6);
test3.addEdge('C', 'E', 3);
test3.addEdge('D', 'F', 4);
test3.addEdge('E', 'F', 1);
test3.addEdge('E', 'Fullstack Academy', 4);
test3.addEdge('F', 'Fullstack Academy', 2);

const test4 = new graph();
test4.addVertex('A');
test4.addVertex('B');
test4.addVertex('C');
test4.addVertex('D');
test4.addVertex('E');
test4.addEdge('A', 'B', 3);
test4.addEdge('A', 'C', 1);
test4.addEdge('B', 'C', 7);
test4.addEdge('B', 'D', 5);
test4.addEdge('B', 'E', 1);
test4.addEdge('C', 'D', 2);
test4.addEdge('D', 'E', 7);

console.log(
  'Test 1 : From A to A :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'A')
);
console.log(
  'Test 1 : From A to B :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'B')
);
console.log(
  'Test 1 : From A to C :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'C')
);
console.log(
  'Test 1 : From A to D :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'D')
);
console.log(
  'Test 1 : From A to E :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'E')
);
console.log(
  'Test 1 : From A to F :',
  dijkstrasShortestPathAlgorithm(test.adjacencyList, 'A', 'F')
);

console.log(
  'Test 2 : From A to F :',
  dijkstrasShortestPathAlgorithm(test2.adjacencyList, 'A', 'F')
);

console.log(
  'Test 3 : From Home to Fullstack Academy :',
  dijkstrasShortestPathAlgorithm(
    test3.adjacencyList,
    'Home',
    'Fullstack Academy'
  )
);

console.log(dijkstrasShortestPathAlgorithm(graph1.adjacencyList, 'a', 'e'));
console.log(dijkstrasShortestPathAlgorithm(graph2.adjacencyList, 'a', 'h'));
console.log(dijkstrasShortestPathAlgorithm(test4.adjacencyList, 'C', 'E'));
console.log(dijkstrasShortestPathAlgorithm(test4.adjacencyList, 'A', 'E'));
