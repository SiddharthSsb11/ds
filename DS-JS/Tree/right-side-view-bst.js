// https://leetcode.com/problems/binary-tree-right-side-view/
// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function (root) {
  if (!root) return []; // If the tree is empty, return an empty array.

  const result = [];
  const queue = [root]; // Initialize a queue for level-order traversal.

  while (queue.length > 0) {
    const levelSize = queue.length; // Get the number of nodes at the current level.

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Dequeue the current node.

      // If it's the last node in the level, add it to the result.
      if (i === levelSize - 1) {
        result.push(node.val);
      }

      // Add the left and right children (if they exist) to the queue.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result; // Return the list of right-side view nodes.
};
