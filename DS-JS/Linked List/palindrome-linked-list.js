// https://leetcode.com/problems/palindrome-linked-list/description/
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Input: head = [1,2,2,1] Output: true
// Input: head = [1,2] Output: false

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

const isPalindrome = (head) => {
  let str1 = "";
  let str2 = "";
  let current = head;

  console.log(current);
  while (current !== null) {
    str1 = `${str1}${current.val}`;
    str2 = `${current.val}${str2}`;
    current = current.next;
  }

  return str1 === str2;
};

// Test
const head = createLinkedList([1, 2, 2, 1]);
console.log(isPalindrome(head)); // Output: true

const head2 = createLinkedList([1, 2]);
console.log(isPalindrome(head2)); // Output: false
