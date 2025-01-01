// https://leetcode.com/problems/flood-fill/description/
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2 Output: [[2,2,2],[2,2,0],[2,0,1]]
// a starting pixel (sr, sc) (row, column),
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0 Output: [[0,0,0],[0,0,0]]
//dfs

function floodFill(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];

  // If the starting pixel is already the new color, return the original image
  if (oldColor === newColor) return image;

  // Helper function for DFS
  function dfs(row, col) {
    // Base case: Check if we're out of bounds or at a pixel of a different color
    if (
      row < 0 ||
      row >= image.length ||
      col < 0 ||
      col >= image[0].length ||
      image[row][col] !== oldColor
    ) {
      return; //retrun image
    }

    // Change the color of the current pixel
    image[row][col] = newColor;

    // Recursive calls for all four directions
    dfs(row + 1, col); // Down
    dfs(row - 1, col); // Up
    dfs(row, col + 1); // Right
    dfs(row, col - 1); // Left
  }

  dfs(sr, sc); // Start DFS from the starting pixel
  return image;
}

//tc o(m*n),  sc o(m*n)
