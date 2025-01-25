var mergeKLists = function (lists) {
  // Initialise an array to store the values in
  let mainArray = [];

  function addLinkedListToMainArray(subArray) {
    // Push value of the LinkedList's current node to the main array
    mainArray.push(subArray.val);

    // Add the next node in the LinkedList
    if (subArray.next != null) {
      addLinkedListToMainArray(subArray.next);
    }
  }

  // Loop through the supplied LinkedLists
  for (let i = 0; i < lists.length; i++) {
    // Check if the LinkedList is empty
    if (lists[i] != null) {
      // Add the LinkedList's contents to the main array
      addLinkedListToMainArray(lists[i]);
    }
  }

  // Sort the main array
  mainArray = mainArray.sort((a, b) => a - b);

  // Convert the array to a LinkedList
  let newList = null;
  for (i = mainArray.length - 1; i >= 0; i--) {
    newList = new ListNode(mainArray[i], newList);
  }

  return newList;
};
