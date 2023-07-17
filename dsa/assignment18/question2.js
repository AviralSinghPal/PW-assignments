function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let i = 0;
  
    while (i <= high) {
      if (nums[i] === 0) {
        [nums[i], nums[low]] = [nums[low], nums[i]];
        i++;
        low++;
      } else if (nums[i] === 2) {
        [nums[i], nums[high]] = [nums[high], nums[i]];
        high--;
      } else {
        i++;
      }
    }
  }
  
  // Example usage:
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]
  
  const nums2 = [2, 0, 1];
  sortColors(nums2);
  console.log(nums2); // Output: [0, 1, 2]
  