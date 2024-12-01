// https://leetcode.com/problems/reverse-string-ii/description/
//Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// Input: s = "abcdefg", k = 2 Output: "bacdfeg"
// Input: s = "abcd", k = 2 Output: "bacd"

const reverseStrOptimized = (s, k) => {
  let arr = s.split(""); // Convert string to array for in-place operations
  for (let i = 0; i < arr.length; i += 2 * k) {
    // Reverse only the first k characters in every 2k segment
    let start = i;
    let end = Math.min(i + k - 1, arr.length - 1); // Ensure we don't go out of bounds
    while (start < end) {
      // Swap characters
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr.join(""); // Convert back to string
};

// Test the function
console.log(reverseStrOptimized("abcdefg", 2)); // Output: "bacdfeg"
console.log(reverseStrOptimized("abcd", 2)); // Output: "bacd"
