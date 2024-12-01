// https://leetcode.com/problems/longest-common-prefix/
// Input: strs = ["flower","flow","flight"] Output: "fl"
// Input: strs = ["dog","racecar","car"] Output: "" Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  strs = strs.sort();
  let firstString = strs[0];
  let lastString = strs[strs.length - 1];

  let longestPrefix = "";

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === lastString[i]) {
      longestPrefix += firstString[i];
    } else {
      break; // Stop the loop if characters don't match
    }
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
