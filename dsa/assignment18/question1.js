function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    const result = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];
      const [prevStart, prevEnd] = result[result.length - 1];
  
      if (start <= prevEnd) {
        result[result.length - 1] = [prevStart, Math.max(prevEnd, end)];
      } else {
        result.push([start, end]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals1)); // Output: [[1, 6], [8, 10], [15, 18]]
  
  const intervals2 = [[1, 4], [4, 5]];
  console.log(mergeIntervals(intervals2)); // Output: [[1, 5]]
  