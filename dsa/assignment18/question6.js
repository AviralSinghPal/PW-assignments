function findMinArrowShots(points) {
    if (points.length <= 1) return points.length;
  
    points.sort((a, b) => a[1] - b[1]);
  
    let count = 1;
    let end = points[0][1];
  
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        count++;
        end = points[i][1];
      }
    }
  
    return count;
  }
  
  // Example usage:
  const points1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
  console.log(findMinArrowShots(points1)); // Output: 2
  
  const points2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
  console.log(findMinArrowShots(points2)); // Output: 4
  