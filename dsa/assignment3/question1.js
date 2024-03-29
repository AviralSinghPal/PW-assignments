function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          return closestSum;
        }
      }
    }
  
    return closestSum;
  }
  
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2
  