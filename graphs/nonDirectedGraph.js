module.exports = class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
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
