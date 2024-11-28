// https://leetcode.com/problems/product-of-array-except-self/description/
// answer[i]=prefix[i−1]×suffix[i+1]

const productExceptSelf = function (nums) {
  const n = nums.length;
  let leftProduct = 1; // prefix // Start with 1 (no product to the left of first element)
  let rightProduct = 1; //suffix // Start with 1 (no product to the right of last element)
  let output = new Array(n).fill(1);

  // Step 1: Calculate prefix product for each index
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct; // Store the prefix product so far
    leftProduct = leftProduct * nums[i]; // Update prefix to include nums[i]
  }

  // Step 2: Calculate suffix product and update result array
  for (let i = n - 1; i >= 0; i--) {
    output[i] = output[i] * rightProduct; // Multiply the suffix product so far
    rightProduct = rightProduct * nums[i]; // Update suffix to include nums[i]
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// Tc O(n)
// Sc O(1) // ignoring the o/p array
