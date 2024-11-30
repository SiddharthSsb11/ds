// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]
// Input: nums = [1,1] Output: [2];

const disappearedNumbers = (nums) => {
  let result = [];
  let set = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
