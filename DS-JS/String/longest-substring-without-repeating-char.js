// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

//better optimized approach is to solve using sliding window

// Input: s = "abcabcbb" Output: 3 // The answer is "abc", with the length of 3.
// Input: s = "bbbbb" // Output: 1 // Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew" Output: 3 The answer is "wke", with the length 3.Notice that the answer must be a substring, "pwke" is a subsequence, not a substring.

const longestSubStringWithoutRepeatChar = (str) => {
  const set = new Set();
  const n = str.length;
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < n) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      set.delete(str[left]);
      left++;
    }
  }
  return maxLength;
};

console.log(longestSubStringWithoutRepeatChar("abcabcbb")); // 3
