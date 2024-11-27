// bactrackin algo

// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

// explanation

const subsets = (nums) => {
  let result = [];
  let temp = [];
  const recursiveBacktracking = (nums, i) => {
    if (i === nums.length) return result.push(...temp);
    temp.push(nums[i]);
    recursiveBacktracking(nums, i + 1);
    temp.pop();
    recursiveBacktracking(nums, i + 1);
  };
  recursiveBacktracking(nums, 0);
  return result;
};

console.log(
  subsets([1, 2, 3])
)// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// --------------------------------------------------------------------------------------
// function subsets(nums) {
//     let result = []; // Array to store the final list of all subsets
//     let temp = [];   // Temporary array to store the current subset being constructed

//     // Recursive function to generate subsets
//     function recursiveSubsets(nums, i) {
//         // Base case: If we've processed all elements in the array
//         if (i === nums.length) {
//             return result.push([...temp]); // Add a copy of the current subset to the result
//         }

//         // Include the current element in the subset
//         temp.push(nums[i]);               // Add nums[i] to the current subset
//         recursiveSubsets(nums, i + 1);    // Recursively generate subsets including nums[i]

//         // Exclude the current element from the subset
//         temp.pop();                       // Remove nums[i] to backtrack
//         recursiveSubsets(nums, i + 1);    // Recursively generate subsets excluding nums[i]
//     }

//     // Start the recursion with index 0
//     recursiveSubsets(nums, 0);
//     return result; // Return the final list of subsets
// }
// ```;

// ### **How It Works**
// 1. **Initialization**:
//    - `result` will store all subsets.
//    - `temp` is used to build each subset incrementally.

// 2. **Recursive Function**:
//    - The function explores two possibilities for each element:
//      - **Include** the element in the subset.
//      - **Exclude** the element from the subset.

// 3. **Base Case**:
//    - When `i === nums.length`, the recursion stops because all elements have been processed. The current subset (`temp`) is added to `result`.

// 4. **Backtracking**:
//    - After exploring one branch (including the element), the element is removed using `temp.pop()` to backtrack and explore the other branch (excluding the element).

// 5. **Result**:
//    - By the end of the recursion, `result` contains all possible subsets.

// ---

// Recursive Function Flow
// temp.push(nums[i]): Adds the current element to the subset.
// recursiveSubsets(nums, i + 1): Moves to the next index, including the current element in the subset.
// temp.pop(): Removes the last added element to backtrack (exclude it).
// recursiveSubsets(nums, i + 1): Moves to the next index, excluding the current element.

// ### **Dry Run** for Input `[1, 2, 3]`

// #### **Tree Representation of Recursion**
// Each node represents the state of `temp` at that step:

// Start: []
// |
// |-- Include 1: [1]
// |   |-- Include 2: [1, 2]
// |   |   |-- Include 3: [1, 2, 3] (Base case, add to result)
// |   |   |-- Exclude 3: [1, 2] (Base case, add to result)
// |   |
// |   |-- Exclude 2: [1]
// |       |-- Include 3: [1, 3] (Base case, add to result)
// |       |-- Exclude 3: [1] (Base case, add to result)
// |
// |-- Exclude 1: []
//     |-- Include 2: [2]
//     |   |-- Include 3: [2, 3] (Base case, add to result)
//     |   |-- Exclude 3: [2] (Base case, add to result)
//     |
//     |-- Exclude 2: []
//         |-- Include 3: [3] (Base case, add to result)
//         |-- Exclude 3: [] (Base case, add to result)

// Step-by-Step Execution
// 1. Start with `temp = []` and `i = 0`.
//    - Include `nums[0] = 1`: `temp = [1]`.
//      - Include `nums[1] = 2`: `temp = [1, 2]`.
//        - Include `nums[2] = 3`: `temp = [1, 2, 3]` → Add to `result`.
//        - Exclude `nums[2]`: `temp = [1, 2]` → Add to `result`.
//      - Exclude `nums[1]`: `temp = [1]`.
//        - Include `nums[2] = 3`: `temp = [1, 3]` → Add to `result`.
//        - Exclude `nums[2]`: `temp = [1]` → Add to `result`.
//    - Exclude `nums[0]`: `temp = []`.
//      - Include `nums[1] = 2`: `temp = [2]`.
//        - Include `nums[2] = 3`: `temp = [2, 3]` → Add to `result`.
//        - Exclude `nums[2]`: `temp = [2]` → Add to `result`.
//      - Exclude `nums[1]`: `temp = []`.
//        - Include `nums[2] = 3`: `temp = [3]` → Add to `result`.
//        - Exclude `nums[2]`: `temp = []` → Add to `result`.

// First Level: i = 0 (Processing 1)
// Include 1:
// temp.push(1) → temp = [1]
// Call recursiveSubsets(nums, 1) (move to i = 1).
// Second Level: i = 1 (Processing 2)
// Include 2:
// temp.push(2) → temp = [1, 2]
// Call recursiveSubsets(nums, 2) (move to i = 2).
// Third Level: i = 2 (Processing 3)
// Include 3:
// temp.push(3) → temp = [1, 2, 3]
// Call recursiveSubsets(nums, 3) (move to i = 3).
// Base Case: i = 3
// Add temp to result:
// result.push([1, 2, 3]) → result = [[1, 2, 3]]
// Return to the previous level (i = 2).
// Unwinding: Back to i = 2
// Exclude 3:
// temp.pop() → temp = [1, 2]
// Call recursiveSubsets(nums, 3) (move to i = 3).
// Base Case: i = 3
// Add temp to result:
// result.push([1, 2]) → result = [[1, 2, 3], [1, 2]]
// Return to the previous level (i = 1).
// Unwinding: Back to i = 1
// Exclude 2:
// temp.pop() → temp = [1]
// Call recursiveSubsets(nums, 2) (move to i = 2).
// Third Level: i = 2 (Processing 3 again)
// Include 3:
// temp.push(3) → temp = [1, 3]
// Call recursiveSubsets(nums, 3) (move to i = 3).
// Base Case: i = 3
// Add temp to result:
// result.push([1, 3]) → result = [[1, 2, 3], [1, 2], [1, 3]]
// Return to the previous level (i = 2).
// Unwinding: Back to i = 2
// Exclude 3:
// temp.pop() → temp = [1]
// Call recursiveSubsets(nums, 3) (move to i = 3).
// Base Case: i = 3
// Add temp to result:
// result.push([1]) → result = [[1, 2, 3], [1, 2], [1, 3], [1]]
// Return to the previous level (i = 0).
// Unwinding: Back to i = 0
// Exclude 1:
// temp.pop() → temp = []
// Call recursiveSubsets(nums, 1) (move to i = 1).
// Repeat the Process for Remaining Elements
// The same steps are repeated for subsets excluding 1. Here’s the flow:

// Include/Exclude 2:
// temp = [2] → [2, 3] → []
// Add subsets: [2, 3], [2], [].
// Include/Exclude 3:
// temp = [3] → []
// Add subsets: [3], [].

// Final result
//
// [
//   [],          // No elements
//   [1],         // Only 1
//   [2],         // Only 2
//   [1, 2],      // 1 and 2
//   [3],         // Only 3
//   [1, 3],      // 1 and 3
//   [2, 3],      // 2 and 3
//   [1, 2, 3]    // All elements
// ]
// ```

//**Time Complexity**
// - For each element in `nums`, there are **two choices**: include or exclude.
// - This creates a **binary tree of depth `n`**, where `n` is the number of elements in `nums`.
// - Total subsets = \(2^n\), so the time complexity is:
//   **O(2^n)**.

// ### **Space Complexity**
// - The maximum depth of the recursion tree is `n`.
// - Space complexity due to recursion stack and `temp`: **O(n)**.

// Let me know if you need further clarification!

```
                                                                     {}
                                                              /             \
                                                            [1]             []
                                                           /  \           /   \
                                                        [1,2]  [1]       [2]    []
                                                       / \     / \       /  \    /\
                                                 [1,2,3][1,2] [1,3][1] [2,3][2]  [3][]
  
  
  
                                                            ```;
