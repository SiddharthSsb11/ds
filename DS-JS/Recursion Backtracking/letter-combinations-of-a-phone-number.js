// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. \
// Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below.
// Input: digits = "23" // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Input: digits = ""// Output: []
// Input: digits = "2" // Output: ["a","b","c"]
var letterCombinations = function (digits) {
  // Base case: If the input digits string is empty, return an empty array
  if (!digits.length) {
    return [];
  }

  // Step 1: Map of digits to corresponding letters
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // Step 2: Result array to store all combinations
  const result = [];

  // Step 3: Helper function for backtracking
  const backtrack = (index, currentCombination) => {
    // If the current combination is as long as the digits string, add it to the result
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    // Get the letters corresponding to the current digit
    const letters = digitToLetters[digits[index]];

    // Loop through each letter and recursively build the combination
    for (const letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  };

  // Step 4: Start backtracking from the first digit
  backtrack(0, "");

  return result;
};
