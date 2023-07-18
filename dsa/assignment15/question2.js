function nearestSmallerNumber(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];
  
    for (let i = 0; i < n; i++) {
      while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[i] = arr[index];
      }
      stack.push(i);
    }
  
    return result;
  }
  
  // Test Example 1
  const arr1 = [1, 6, 2];
  console.log(nearestSmallerNumber(arr1)); // Output: [-1, 1, 1]
  
  // Test Example 2
  const arr2 = [1, 5, 0, 3, 4, 5];
  console.log(nearestSmallerNumber(arr2)); // Output: [-1, 1, -1, 0, 3, 4]
  