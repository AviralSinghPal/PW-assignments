function majorityElement(nums) {
    let candidate = null;
    let count = 0;
  
    for (const num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += num === candidate ? 1 : -1;
    }
  
    return candidate;
  }
  
  // Test Example 1
  console.log(majorityElement([3, 2, 3])); // Output: 3
  
  // Test Example 2
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
  