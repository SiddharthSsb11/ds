// https://leetcode.com/problems/clone-graph/description/
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]] // Output: [[2,4],[1,3],[2,4],[1,3]]
// Input: adjList = [[]] // Output: [[]]
// The Clone Graph problem involves creating a deep copy of an undirected graph. The graph is represented as a set of Node objects.

var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map(); // A map to store the cloned nodes

  const dfs = (originalNode) => {
    // Helper function for DFS

    if (visited.has(originalNode.val)) return visited.get(originalNode.val); // If the node is already cloned, return it

    const cloneNode = new Node(originalNode.val); // Create a clone of the current node
    visited.set(cloneNode.val, cloneNode); // Add the clone to the map to avoid duplications.

    for (let neighbor of originalNode.neighbors) {
      // Recursively clone all neighbors
      cloneNode.neighbors.push(dfs(neighbor)); //Recursively clone all its neighbors and add them to the neighbors list of the cloned node.
    }

    return cloneNode;
  };

  return dfs(node);
};
// O(N + E)	O(N + E)
