function containsDuplicate(nums) {
    const numSet = new Set();
  
    for (const num of nums) {
      if (numSet.has(num)) {
        return true;
      } else {
        numSet.add(num);
      }
    }
  
    return false;
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 1];
  console.log(containsDuplicate(nums1)); // Output: true
  
  const nums2 = [1, 2, 3, 4];
  console.log(containsDuplicate(nums2)); // Output: false
  