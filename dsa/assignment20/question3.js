function isValidLevelOrderTraversal(arr) {
    if (arr.length === 0) return true;
  
    let i = 1;
    const queue = [{ node: arr[0], lower: -Infinity, upper: Infinity }];
  
    while (i < arr.length && queue.length) {
      const { node, lower, upper } = queue.shift();
  
      if (node < lower || node > upper) {
        return false;
      }
  
      if (i < arr.length && arr[i] < node) {
        queue.push({ node: arr[i], lower, upper: node });
        i++;
      }
  
      if (i < arr.length && arr[i] > node) {
        queue.push({ node: arr[i], lower: node, upper });
        i++;
      }
    }
  
    return i === arr.length;
  }
  
  // Example usage:
  const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  console.log(isValidLevelOrderTraversal(arr1)); // Output: true
  
  const arr2 = [11, 6, 13, 5, 12, 10];
  console.log(isValidLevelOrderTraversal(arr2)); // Output: false
  