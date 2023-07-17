function missingNumber(nums) {
    let n = nums.length;
    let total = (n * (n + 1)) / 2;
  
    for (let num of nums) {
      total -= num;
    }
  
    return total;
  }
  
  const nums = [3, 0, 1];
  const result = missingNumber(nums);
  console.log(result); // Output: 2
  