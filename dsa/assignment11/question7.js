function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        startIndex = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    left = 0;
    right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        endIndex = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return [startIndex, endIndex];
  }
  
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const result = searchRange(nums, target);
  console.log(result); // Output: [3, 4]
  