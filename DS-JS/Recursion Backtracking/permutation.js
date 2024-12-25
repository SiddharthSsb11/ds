//https://leetcode.com/problems/permutations/description/
// The problem Permutations asks you to return all possible permutations of a given array of numbers. Each permutation must be distinct,
//and the solution must not use any repeated numbers in a single permutation.
// Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Input: nums = [0,1] Output: [[0,1],[1,0]]
// Input: nums = [1] Output: [[1]]

const permute = (nums) => {
  const result = [];

  const backtrack = (start) => {
    if (start === nums.length) {
      result.push([...nums]); // Push a copy of nums to the result
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
      backtrack(start + 1); // Recurse
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack (undo swap)
    }
  };

  backtrack(0); // Start the recursion
  return result;
};

console.log(permute([1, 2, 3]));
