class Graph {
  constructor() {
    this.adjacencyList = new Map(); // Use Map to store vertices and their adjacency lists
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set()); // Initialize a Set for the vertex's neighbors
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).add(vertex2); // Add the edge
    this.adjacencyList.get(vertex2).add(vertex1); // Since it's an undirected graph
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).delete(vertex2); // Remove the edge from vertex1
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).delete(vertex1); // Remove the edge from vertex2
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return;
    }
    // Remove all edges associated with this vertex
    for (let adjacentVertex of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex); // Delete the vertex from the Map
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList.has(vertex1) &&
      this.adjacencyList.get(vertex1).has(vertex2) &&
      this.adjacencyList.has(vertex2) &&
      this.adjacencyList.get(vertex2).has(vertex1)
    );
  }

  display() {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${[...neighbors].join(", ")}`);
    }
  }
}

// Example Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
console.log("--- After Removing Edge A-B ---");
graph.removeEdge("A", "B");
graph.display();
console.log("--- After Removing Vertex A ---");
graph.removeVertex("A");
graph.display();
