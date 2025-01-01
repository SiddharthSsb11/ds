// The width of a level is defined as the number of nodes between the leftmost and rightmost non-null nodes (inclusive).
// The tree may contain null nodes, but they are counted when calculating width.
// https://leetcode.com/problems/maximum-width-of-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0; // If the tree is empty, the width is 0.

  let maxWidth = 0; // To store the maximum width of the tree.
  const queue = [[root, 0]]; // Queue to store nodes along with their indices.

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelStartIndex = queue[0][1]; // Index of the first node at the current level.
    let firstIndex = 0,
      lastIndex = 0;

    for (let i = 0; i < levelSize; i++) {
      const [node, index] = queue.shift(); // Dequeue the current node and its index.

      // Normalize the index to prevent integer overflow.
      const normalizedIndex = index - levelStartIndex;

      // Update first and last indices for the level.
      if (i === 0) firstIndex = normalizedIndex;
      if (i === levelSize - 1) lastIndex = normalizedIndex;

      // Enqueue the left and right children with their indices.
      if (node.left) queue.push([node.left, 2 * normalizedIndex + 1]);
      if (node.right) queue.push([node.right, 2 * normalizedIndex + 2]);
    }

    // Calculate the width of the current level and update the maximum width.
    maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);
  }

  return maxWidth;
};
