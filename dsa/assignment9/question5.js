function findMax(arr, n) {
    if (n === 1) {
      return arr[0];
    }
    
    return Math.max(arr[n - 1], findMax(arr, n - 1));
  }
  
  const arr = [1, 4, 45, 6, 10, -8];
  const result = findMax(arr, arr.length);
  console.log(result); // Output: 45
  