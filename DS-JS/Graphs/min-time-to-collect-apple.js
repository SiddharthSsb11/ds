//leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8

function minTime(n, edges, hasApple) {
  // Step 1: Build the adjacency list
  const tree = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    //o(n)
    tree[u].push(v);
    tree[v].push(u);
  }

  // Step 2: DFS function
  function dfs(node, parent) {
    //o(n)
    let time = 0;

    for (const neighbor of tree[node]) {
      if (neighbor === parent) continue; // Avoid revisiting the parent node

      const childTime = dfs(neighbor, node);
      if (childTime > 0 || hasApple[neighbor]) {
        time += childTime + 2; // Add 2 for the round trip to this child
      }
    }

    return time;
  }

  // Start DFS from node 0 // root node
  // The parameter parent is used to keep track of the node that called the current dfs function.
  // This ensures we don't traverse back to the parent node in an undirected graph, which would cause infinite recursion.
  // At the very beginning (when starting from the root node 0), there is no parent node because the root is the top-most node.
  // Hence, -1 is passed as a "non-existent parent" to signify this.

  return dfs(0, -1);
}

// Time Complexity: O(n) Space Complexity: O(n)

// example
// n = 5;
// edges = [
//   [0, 1],
//   [0, 2],
//   [1, 3],
//   [1, 4],
// ];

// Initial State:
// We initialize an empty adjacency list:

// tree = [[], [], [], [], []];
// Processing Each Edge:
// Edge [0, 1]:

// Add 1 to tree[0] → tree[0] = [1]
// Add 0 to tree[1] → tree[1] = [0]
// Updated adjacency list:

// tree = [[1], [0], [], [], []];
// Edge [0, 2]:

// Add 2 to tree[0] → tree[0] = [1, 2]
// Add 0 to tree[2] → tree[2] = [0]
// Updated adjacency list:

// tree = [[1, 2], [0], [0], [], []];
// Edge [1, 3]:

// Add 3 to tree[1] → tree[1] = [0, 3]
// Add 1 to tree[3] → tree[3] = [1]
// Updated adjacency list:

// tree = [[1, 2], [0, 3], [0], [1], []];
// Edge [1, 4]:

// Add 4 to tree[1] → tree[1] = [0, 3, 4]
// Add 1 to tree[4] → tree[4] = [1]
// Final adjacency list:
// tree = [[1, 2], [0, 3, 4], [0], [1], [1]];

// Visualization of the Tree
// If we visualize the adjacency list:

// Node 0: Connected to nodes 1 and 2 → tree[0] = [1, 2]
// Node 1: Connected to nodes 0, 3, and 4 → tree[1] = [0, 3, 4]
// Node 2: Connected to node 0 → tree[2] = [0]
// Node 3: Connected to node 1 → tree[3] = [1]
// Node 4: Connected to node 1 → tree[4] = [1]
// This structure mirrors the input edges and represents the tree correctly.
