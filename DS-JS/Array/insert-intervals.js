//  https://leetcode.com/problems/insert-interval/description/

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]

const insertInterval = (intervals, newInterval) => {
  let result = [];
  const n = intervals.length;
  for (let i = 0; i < n; i++) {
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]); // left most
    } else if (intervals[i][0] > newInterval[1]) {
      //current interval, comes after new interval, with no overlap
      result.push(newInterval);
      newInterval = intervals[i]; // right most
      // After adding the newInterval to the result, the current interval (intervals[i]) becomes the next interval to process.
      // This happens because the current interval is completely separate and does not overlap with the previous newInterval.
      // prepares for the next interval when no merging is required.
    } else {
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    }
  }
  result.push(newInterval); // for the last newInterval right most case addition
  //At the end of the loop, there may still be a newInterval that hasn't been added to the result yet.
  // This happens when the newInterval is still being processed or is the last interval in the merged result.
  return result;
};

console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);

// Output: [[1,2],[3,10],[12,16]]
