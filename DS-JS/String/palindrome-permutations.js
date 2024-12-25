// https://www.geeksforgeeks.org/print-all-palindrome-permutations-of-a-string/
// Understand a Palindromic Permutation:
// A string is a palindromic permutation if it can be rearranged to form a palindrome.
// For example, the string "aabb" has permutations like "abba" and "baab", which are palindromes.
// Key Observations:
// A string can form a palindrome if at most one character has an odd frequency.
// If all characters have even frequencies, the string can be arranged into a palindrome.
// Algorithm:
// Count the frequency of each character in the string using a Map.
// Check if the string can form a palindrome based on the character frequencies.
// Generate all permutations of the half-string (since a palindrome is symmetric).
// Mirror each half-permutation to form complete palindromes.

function generatePalindromicPermutations(str) {
  const charMap = new Map();
  const result = [];

  // Count frequency of each character
  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Check if a palindrome is possible
  let oddCount = 0;
  let oddChar = "";
  for (const [char, count] of charMap) {
    if (count % 2 !== 0) {
      oddCount++;
      oddChar = char;
    }
  }
  if (oddCount > 1) {
    return []; // No palindrome permutations possible
  }

  // Create the half string for permutation
  let halfStr = "";
  for (const [char, count] of charMap) {
    halfStr += char.repeat(Math.floor(count / 2));
  }

  // Helper function to generate all permutations
  function permute(half, used, current, permutations) {
    if (current.length === half.length) {
      permutations.push(current);
      return;
    }

    for (let i = 0; i < half.length; i++) {
      if (used[i]) continue;
      // Skip duplicates
      if (i > 0 && half[i] === half[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      permute(half, used, current + half[i], permutations);
      used[i] = false;
    }
  }

  // Generate all permutations of the half string
  const permutations = [];
  permute(
    halfStr.split("").sort().join(""),
    Array(halfStr.length).fill(false),
    "",
    permutations
  );

  // Mirror each half-permutation to form a palindrome
  for (const half of permutations) {
    const fullPalindrome =
      half + (oddChar || "") + half.split("").reverse().join("");
    result.push(fullPalindrome);
  }

  return result;
}

// Example Usage
console.log(generatePalindromicPermutations("aabb")); // ["abba", "baab"]
console.log(generatePalindromicPermutations("abc")); // []
console.log(generatePalindromicPermutations("aaa")); // ["aaa"]
