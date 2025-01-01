// https://leetcode.com/problems/symmetric-tree/
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// We need to determine if a binary tree is symmetric around its center. A tree is symmetric if:
// The left subtree is a mirror reflection of the right subtree.

var isSymmetric = function (root) {
  if (!root) return true; // An empty tree is symmetric.

  // Helper function to check if two trees are mirrors of each other.
  const isMirror = (t1, t2) => {
    if (!t1 && !t2) return true; // Both are null, symmetric.
    if (!t1 || !t2) return false; // One is null, not symmetric.
    // Check values and recurse on the children in a mirrored order.
    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  };

  return isMirror(root.left, root.right);
};
