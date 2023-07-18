function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (x - arr[mid] > arr[mid + k] - x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return arr.slice(left, left + k);
  }
  
  // Test Example 1
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // Output: [1, 2, 3, 4]
  
  // Test Example 2
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1)); // Output: [1, 2, 3, 4]
  