// brute solution

// https://leetcode.com/problems/longest-palindromic-substring/description/

// Input: s = "babad" Output: "bab" Explanation: "aba" is also a valid answer.
// Input: s = "cbbd" Output: "bb

const isPalindrome = function (str) {
  if (str.length === 0) return false;
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};

const longestPalindromicSubstring = (str) => {
  let maxLength = 0;
  let longestSubstring = "";
  const n = str.length;

  for (let i = 0; i < n; i++) {
    let substring = "";
    for (let j = i; j < n; j++) {
      substring = substring + str[j];
      if (substring.length > maxLength && isPalindrome(substring)) {
        maxLength = substring.length;
        longestSubstring = substring;
      }
    }
  }

  return longestSubstring;
};

console.log(longestPalindromicSubstring("cbbd"));

//timeComplexity
