function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  
  const nums = [1, 3, 4, 2, 2];
  const result = findDuplicate(nums);
  console.log(result); // Output: 2
  