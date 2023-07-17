function sqrt(x) {
    if (x === 0) return 0;
    let left = 1;
    let right = Math.floor(x / 2) + 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return right;
  }
  
  const x = 8;
  const result = sqrt(x);
  console.log(result); // Output: 2
  