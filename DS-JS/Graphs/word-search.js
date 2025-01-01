// https://leetcode.com/problems/word-search/description/
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE" Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" Output: false
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // Helper function for DFS
  function dfs(row, col, index) {
    // Base case: If we've matched all the letters in the word
    if (index === word.length) return true;

    // Check boundaries and if the cell matches the current letter
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Temporarily mark the cell as visited
    const temp = board[row][col];
    board[row][col] = "#";

    // Explore all four directions: up, down, left, right
    const found =
      dfs(row + 1, col, index + 1) || // Down
      dfs(row - 1, col, index + 1) || // Up
      dfs(row, col + 1, index + 1) || // Right
      dfs(row, col - 1, index + 1); // Left

    // Restore the cell value (backtracking)
    board[row][col] = temp;

    return found;
  }

  // Iterate over every cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Start DFS if the first letter matches
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false; // No path found
}

//Time Complexity:Total: O(N * 4^L) where N is the number of cells in the grid, and L is the length of the word.
// Space Complexity: The recursion stack for DFS can go up to O(L), where L is the length of the word.

//Steps:
// Traverse the grid cell by cell.
// If the first letter of the word matches a cell, start a DFS (Depth First Search) from that cell.
// In the DFS:
// Check if the current cell matches the current letter of the word.
// Mark the cell as visited by temporarily changing its value (to avoid reuse).
// Explore its neighbors (up, down, left, right).
// Backtrack by restoring the cell's original value after exploration.
// If all letters in the word are found, return true. If no path works, return false.
