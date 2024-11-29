// https://leetcode.com/problems/merge-intervals/description/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]] // Output: [[1,6],[8,10],[15,18]] // Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Input: intervals = [[1,4],[4,5]] // Output: [[1,5]] // Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const mergeIntervals = (intervals) => {
  //  intervals = intervals.sort((a,b) => a[0] - b[0])
  let result = [];
  let pair = intervals[0];

  for (let interval of intervals) {
    if (pair[1] >= interval[0]) {
      pair[1] = Math.max(pair[1], interval[1]); // pair[0] = math.min(pair(0), interval(0))
    } else {
      result.push(pair);
      pair = interval; // After adding the pair to the result, the current interval (intervals[i]) becomes the next interval to process.
      // This happens because the current interval is completely separate and does not overlap with the previous pair.
      // console.log("--else--", pair);
    }
  }
  result.push(pair); // for the last interval coming from else block
  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
    [15, 18],
  ])
); //[[1,6], [8,12], [15,18]]
