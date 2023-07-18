function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];
  
    for (let i = 0; i < nums.length; i++) {
      while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      deque.push(i);
  
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
  
  // Test Example 1
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
  
  // Test Example 2
  console.log(maxSlidingWindow([1], 1)); // Output: [1]
  