// Definition for a Node.
class Node {
  constructor(val, prev, next, child) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
    this.child = child || null;
  }
}

const flatten = function (head) {
  if (!head) return null; // Base case: empty list

  // Helper function to flatten and return the tail of the flattened list
  const flattenAndGetTail = (node) => {
    let current = node;
    let tail = node;

    while (current) {
      let next = current.next;

      // If the current node has a child, flatten the child list
      if (current.child) {
        const childHead = current.child;
        const childTail = flattenAndGetTail(childHead);

        // Connect current node to childHead
        current.next = childHead;
        childHead.prev = current;

        // Connect childTail to next (if it exists)
        if (next) {
          childTail.next = next;
          next.prev = childTail;
        }

        // Clear the child pointer
        current.child = null;

        // Update tail to the childTail
        tail = childTail;
      } else {
        // Update tail to current if no child exists
        tail = current;
      }

      // Move to the next node
      current = next;
    }

    return tail; // Return the tail of the flattened list
  };

  flattenAndGetTail(head); // Start flattening from the head
  return head; // Return the modified head
};

//  O(N),
