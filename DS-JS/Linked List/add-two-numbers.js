// https://leetcode.com/problems/add-two-numbers/description/
// Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8] Explanation: 342 + 465 = 807.
// Input: l1 = [0], l2 = [0] Output: [0] // Example 3: Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

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

const addTwo = (l1, l2) => {
  let dummy = new ListNode(0); //  Skip the dummy node
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // not return current because initialized with zero(0) //  Skip the dummy node
};

const head1 = createLinkedList([2, 4, 3]);
const head2 = createLinkedList([5, 6, 4]);

const addedList = addTwo(head1, head2);
// console.log(addedList);
console.log(linkedListToArray(addedList)); //  [7,0,8]
