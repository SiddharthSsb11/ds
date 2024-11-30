// https://leetcode.com/problems/missing-number/solutions/6051524/video-using-index-numbers/
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Input: nums = [3,0,1] Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums) => {
  let n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => {
    return (acc = acc + num);
  }, 0);
  const missingNum = expectedSum - actualSum;
  return missingNum;
};

console.log(missingNumber([3, 0, 1, 2])); // 4
console.log(missingNumber([3, 0, 1])); // 2
