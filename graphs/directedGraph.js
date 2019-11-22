module.exports = class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(from, to) {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList[from].push(to);
    return this;
  }

  removeEdge(from, to) {
    this.adjacencyList[from] = this.adjacencyList[from].filter(v => v !== to);
    return this;
  }

  removeVertex(vertexToRemove) {
    let newList = {};
    let curList = this.adjacencyList;
    for (let vertex in curList) {
      if (vertex !== vertexToRemove) {
        newList[vertex] = curList[vertex].filter(
          curVer => curVer !== vertexToRemove
        );
      }
    }
    this.adjacencyList = newList;
    return this;
  }
};
