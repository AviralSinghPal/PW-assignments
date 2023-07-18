function trap(height) {
    const n = height.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    let water = 0;
  
    // Compute leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
  
    // Compute rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
  
    // Calculate trapped water
    for (let i = 0; i < n; i++) {
      water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
  
    return water;
  }
  
  // Test Example 1
  const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trap(height1)); // Output: 6
  
  // Test Example 2
  const height2 = [4, 2, 0, 3, 2, 5];
  console.log(trap(height2)); // Output: 9
  