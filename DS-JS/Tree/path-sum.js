// https://leetcode.com/problems/path-sum/description/
// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

var hasPathSum = function (root, targetSum) {
  // Base case: if the root is null, there's no path
  if (!root) {
    return false;
  }

  // Check if the current node is a leaf and the targetSum equals the node's value
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }

  // Recursively check left and right subtrees with the updated targetSum
  const newTargetSum = targetSum - root.val;
  return (
    hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum)
  );
};
