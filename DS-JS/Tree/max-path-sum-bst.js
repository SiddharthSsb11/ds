// https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
// Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.

var maxPathSum = function (root) {
  // Initialize a variable to track the global maximum path sum
  let globalMax = -Infinity;

  // Helper function to calculate the maximum path sum using DFS
  const findMaxPathSum = (node) => {
    if (!node) {
      // Base case: if the node is null, its contribution is 0
      return 0;
    }

    // Recursively calculate the max contribution from the left and right subtrees
    // If a subtree's max sum is negative, we ignore it (i.e., treat it as 0)
    let leftMax = Math.max(0, findMaxPathSum(node.left));
    let rightMax = Math.max(0, findMaxPathSum(node.right));

    // Calculate the path sum passing through the current node
    let currentPathSum = node.val + leftMax + rightMax;

    // Update the global maximum if the current path sum is greater
    globalMax = Math.max(globalMax, currentPathSum);

    // Return the maximum contribution of the current node to its parent
    return node.val + Math.max(leftMax, rightMax);
  };

  // Start the DFS traversal from the root
  findMaxPathSum(root);

  // Return the global maximum path sum
  return globalMax;
};

// For each node there can be four ways that the max path goes through the node:

// Node only
// Max path through Left Child + Node
// Max path through Right Child + Node
// Max path through Left Child + Node + Max path through Right Child

// The idea is to keep track of four paths and pick up the max one in the end.
// An important thing to note is, that the root of every subtree needs to return the maximum path sum such that at most one child of the root is involved.
// This is needed for the parent function call. In the below code, this sum is stored in ‘max_single’ and returned by the recursive function
