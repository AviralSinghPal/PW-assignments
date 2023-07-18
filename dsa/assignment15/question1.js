function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];
  
    for (let i = 0; i < n; i++) {
      while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = arr[i];
      }
      stack.push(i);
    }
  
    return result;
  }
  
  // Test Example 1
  const arr1 = [1, 3, 2, 4];
  console.log(nextGreaterElement(arr1)); // Output: [3, 4, 4, -1]
  
  // Test Example 2
  const arr2 = [6, 8, 0, 1, 3];
  console.log(nextGreaterElement(arr2)); // Output: [8, -1, 1, 3, -1]
  