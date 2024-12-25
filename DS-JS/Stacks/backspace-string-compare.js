//https://leetcode.com/problems/backspace-string-compare/description/
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Input: s = "ab#c", t = "ad#c"// Output: true// Explanation: Both s and t become "ac".
// Input: s = "ab##", t = "c#d#"// Output: true// Explanation: Both s and t become "".
// Input: s = "a#c", t = "b"// Output: false// Explanation: s becomes "c" while t becomes "b".

var backspaceCompare = function (s, t) {
  // Function to process the string and return the final version after applying backspaces
  const processString = (str) => {
    let stack = []; // Stack to hold characters after processing backspaces
    for (let char of str) {
      if (char === "#") {
        stack.pop(); // Remove the last valid character if backspace is encountered
      } else {
        stack.push(char); // Otherwise, add the character to the stack
      }
    }
    return stack.join(""); // Join the stack into a final string
  };

  // Compare the processed strings of both s and t
  return processString(s) === processString(t);
};
