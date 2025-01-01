// https://leetcode.com/problems/number-of-islands/description/
// You are given a m x n grid filled with '1' (land) and '0' (water). Return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ] // Output: 1
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ] // Output: 3

// DFS is used to traverse through each '1' (land) and mark all connected land cells as visited.
// For each cell (row, col) in the grid, if the cell is '1', it's the start of a new island.
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let numIslands = 0;

  // Helper function to perform DFS
  function dfs(row, col) {
    // Base cases: Out of bounds or water cell
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // Mark the cell as visited by changing it to '0'
    grid[row][col] = "0";

    // Explore all 4 directions
    dfs(row + 1, col); // Down
    dfs(row - 1, col); // Up
    dfs(row, col + 1); // Right
    dfs(row, col - 1); // Left
  }

  // Iterate through the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        numIslands++; // Increment count for each new island
        dfs(row, col); // Perform DFS to mark the entire island
      }
    }
  }

  return numIslands;
}
// DFS/BFS: O(m * n) time and space.
