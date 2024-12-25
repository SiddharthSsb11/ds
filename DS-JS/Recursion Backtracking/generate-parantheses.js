/// https://leetcode.com/problems/generate-parentheses/description/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Input: n = 3 //Output: ["((()))","(()())","(())()","()(())","()()()"]
// Input: n = 1 Output: ["()"]

// back tracking

const generateParentheses = (n) => {
  let result = [];

  const recursiveBacktracking = function (open, close, str) {
    if (str?.length === 2 * n) {
      result.push(str);
      return;
    }
    if (open < n) {
      recursiveBacktracking(open + 1, close, str + "(");
    }
    if (close < open) {
      recursiveBacktracking(open, close + 1, str + ")");
    }
  };
  recursiveBacktracking(0, 0, "");
  return result;
};

console.log(generateParentheses(3));
