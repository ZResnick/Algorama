module.exports = class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    return this;
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v.node !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v.node !== v1);
    return this;
  }

  removeVertex(vertexToRemove) {
    let newList = {};
    let curList = this.adjacencyList;
    for (let vertex in curList) {
      if (vertex !== vertexToRemove) {
        newList[vertex] = curList[vertex].filter(
          curVer => curVer.node !== vertexToRemove
        );
      }
    }
    this.adjacencyList = newList;
    return this;
  }
};
