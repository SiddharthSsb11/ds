// https://leetcode.com/problems/two-sum/description/

const twoSum = (nums, sum) => {
  const myMap = new Map();
  for (let i in nums) {
    const pairNum = sum - nums[i];
    if (myMap.has(pairNum)) {
      return [myMap.get(pairNum), i];
    }
    myMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 18)); //[1,2]
