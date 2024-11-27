// 2 pointer

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = function (nums) {
  const size = nums.length;
  let slow = 0; // Pointer to track unique elements

  for (let fast = 1; fast < size; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++; // Move slow pointer to the next position
      nums[slow] = nums[fast]; // Place the unique element at slow position
    }
  }
  return slow + 1;
};

const uniqueArray = function (nums) {
  const length = removeDuplicates(nums);
  console.log(length);
  let result = [];

  for (i = 0; i < length; i++) {
    result.push(nums[i]);
  }

  return result;
};

console.log(uniqueArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //[ 0, 1, 2, 3 ]
