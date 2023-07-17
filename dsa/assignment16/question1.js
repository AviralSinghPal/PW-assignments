function nearestGreaterFrequency(arr) {
    const frequency = {};
    const stack = [];
    const result = [];
  
    // Calculate frequencies of elements
    for (const num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    // Traverse the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && frequency[arr[i]] >= frequency[stack[stack.length - 1]]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        result[i] = -1;
      } else {
        result[i] = stack[stack.length - 1];
      }
  
      stack.push(arr[i]);
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 1, 2, 3, 4, 2, 1];
  console.log(nearestGreaterFrequency(arr1)); // Output: [-1, -1, 1, 2, 2, 1, -1]
  
  const arr2 = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3];
  console.log(nearestGreaterFrequency(arr2)); // Output: [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]
  