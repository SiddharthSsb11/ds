// 2 pointer
// https://leetcode.com/problems/container-with-most-water/description/

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

const mostWater = (heights) => {
  const n = heights.length;
  let left = 0;
  let right = n - 1;
  let maxArea = 0;
  while (left < right) {
    if (heights[left] < heights[right]) {
      left++;
    } else if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
      right--;
    }

    const height = Math.min(heights[left], heights[right]); //min because, check diagram
    const width = right - left;
    const area = width * height;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
