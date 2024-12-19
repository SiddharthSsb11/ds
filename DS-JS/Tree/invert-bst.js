// https://leetcode.com/problems/invert-binary-tree/description/
// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function (root) {
  if (!root) return null; // Base case: if the node is null, return null.

  // Swap the left and right subtrees.
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees.
  invertTree(root.left);
  invertTree(root.right);

  return root; // Return the root of the inverted tree.
};
