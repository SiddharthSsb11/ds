// https://leetcode.com/problems/rotting-oranges/description/

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let freshCount = 0; // Count of fresh oranges
  const queue = []; // Queue for BFS: stores [row, col, time]

  // Step 1: Initialize the queue with all rotten oranges and count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]); // Rotten orange's initial time is 0
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  // If there are no fresh oranges, return 0
  if (freshCount === 0) return 0;

  // Directions for moving in the grid (up, down, left, right)
  const directions = [
    [1, 0], // Down
    [-1, 0], // Up
    [0, 1], // Right
    [0, -1], // Left
  ];

  let minutes = 0; // Track the total time

  // Step 2: Perform BFS
  while (queue.length > 0) {
    const [row, col, time] = queue.shift(); // Dequeue the current rotten orange
    minutes = time; // Update the time with the current time

    // Process all 4 possible directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the new position is within bounds and contains a fresh orange
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        // Rot the fresh orange
        grid[newRow][newCol] = 2;

        // Decrease the fresh count
        freshCount--;

        // Add the newly rotten orange to the queue with updated time
        queue.push([newRow, newCol, time + 1]);
      }
    }
  }

  // Step 3: Check if there are any fresh oranges left
  return freshCount === 0 ? minutes : -1;
}

//Time Complexity: O(N) where N is the total number of cells in the grid. Each cell is processed at most once during BFS.
// feSpace Complexity: O(N) for the queue used in BFS.

//Step-by-Step Approach
// Initialization:

// Count the number of fresh oranges.
// Push the positions of all rotten oranges into a queue. These will act as the starting points for the rotting process.
// Breadth-First Search (BFS):

// Use BFS to simulate the spread of the rotting effect in all four directions (up, down, left, right).
// At each step, process all the rotten oranges in the queue and rot their adjacent fresh neighbors.
// Termination:

// Keep track of the time it takes to rot all fresh oranges. If there are still fresh oranges remaining after processing all the rotten ones, return -1.
