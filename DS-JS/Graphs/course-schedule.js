// https://leetcode.com/problems/course-schedule/description/
// Input: numCourses = 2, prerequisites = [[1,0]] Output: true
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]] // Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []); // Adjacency list

  // Build the graph
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course); // prereq -> course
  }

  const visited = Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

  const dfs = (course) => {
    if (visited[course] === 1) return false; // Cycle detected
    if (visited[course] === 2) return true; // Already processed

    visited[course] = 1; // Mark as visiting

    for (const nextCourse of graph[course]) {
      if (!dfs(nextCourse)) return false;
    }

    visited[course] = 2; // Mark as visited
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false; // If any cycle is detected
  }

  return true; // No cycles found
};
// tc sc O(V + E)
