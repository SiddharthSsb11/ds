//kadane's algo

// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

const maxSumSubArray = (nums) => {
  let sum = 0;
  let maxSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > maxSum) {
      maxSum = sum;
      endIndex = i;
      startIndex = tempStart;
    } else if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }

  return { maxSum, subArray: nums.slice(startIndex, endIndex + 1) };
};

console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
