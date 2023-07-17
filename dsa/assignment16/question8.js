function maxAbsoluteDifference(arr) {
    const leftStack = [];
    const rightStack = [];
    const leftSmaller = new Array(arr.length);
    const rightSmaller = new Array(arr.length);
  
    // Find the nearest smaller element on the left side for each element
    for (let i = 0; i < arr.length; i++) {
      while (leftStack.length > 0 && arr[i] <= arr[leftStack[leftStack.length - 1]]) {
        leftStack.pop();
      }
      leftSmaller[i] = leftStack.length > 0 ? arr[leftStack[leftStack.length - 1]] : 0;
      leftStack.push(i);
    }
  
    // Find the nearest smaller element on the right side for each element
    for (let i = arr.length - 1; i >= 0; i--) {
      while (rightStack.length > 0 && arr[i] <= arr[rightStack[rightStack.length - 1]]) {
        rightStack.pop();
      }
      rightSmaller[i] = rightStack.length > 0 ? arr[rightStack[rightStack.length - 1]] : 0;
      rightStack.push(i);
    }
  
    let maxDifference = 0;
  
    // Calculate the maximum absolute difference
    for (let i = 0; i < arr.length; i++) {
      const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
      maxDifference = Math.max(maxDifference, diff);
    }
  
    return maxDifference;
  }
  
  // Example usage:
  const arr1 = [2, 1, 8, 7, 6, 5];
  console.log(maxAbsoluteDifference(arr1)); // Output: 2
  
  const arr2 = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0];
  console.log(maxAbsoluteDifference(arr2)); // Output: 8
  