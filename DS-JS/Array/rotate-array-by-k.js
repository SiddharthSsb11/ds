// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

const rotatedArray = function (arr, k) {
  let temp;
  let result = [];
  for (let i = 0; i < k; i++) {
    temp = arr.pop();
    result.unshift(temp);
  } // const rotated = arr.splice(size-k, size) // arr.unshift(...rotated)
  return [...result, ...arr];
};

console.log(rotatedArray([1, 2, 3, 4, 5, 6, 7], 3));

const reversedArray = function (arr, left, right) {
  let temp;
  while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    arr[left++];
    arr[right--];
  }
};

const rotatedArrayOptimized = function (arr, k) {
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }

  reversedArray(arr, 0, size - 1);
  reversedArray(arr, 0, k - 1);
  reversedArray(arr, k, size - 1);

  return arr;
};

console.log(rotatedArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3));
