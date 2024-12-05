// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5]

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

const deleteNodeFromEnd = (head, n) => {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next; //taking fast to the node we want to delete from end
  }

  if (!fast) {
    //fast reached the null
    return head.next;
  }

  while (fast.next) {
    // fast reaches end
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

const head = createLinkedList([1, 2, 3, 4, 5]);
// console.log(reverseLinkedList(head));
const deletedNode = deleteNodeFromEnd(head, 2);

// Convert the reversed linked list to an array
console.log(linkedListToArray(deletedNode)); // Output: [1,2,3,5]
