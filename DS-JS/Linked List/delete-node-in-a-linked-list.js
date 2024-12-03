// https://leetcode.com/problems/delete-node-in-a-linked-list/description/
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Utility function to create a linked list from an array
const createLinkedList = (arr) => {
  let head = null;
  let current = null;

  for (const val of arr) {
    if (!head) {
      head = new ListNode(val); // Initialize the head
      current = head;
    } else {
      current.next = new ListNode(val); // Append new nodes
      current = current.next;
    }
  }

  return head;
};

// Utility function to convert a linked list to an array
const linkedListToArray = (head) => {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;

  return node;
};

const clearLL = () => {
  this.head = null;
};

const head = createLinkedList([4, 5, 1, 9]);
// console.log(reverseLinkedList(head));

let nodeToDelete = head;
while (nodeToDelete && nodeToDelete.val !== 5) {
  nodeToDelete = nodeToDelete.next;
}

console.log("--nodetoDelete--", nodeToDelete);

// Delete the node
const deletedNode = deleteNode(nodeToDelete);
// const deletedNode = deleteNode(5);

// Convert the reversed linked list to an array
console.log(linkedListToArray(head));
