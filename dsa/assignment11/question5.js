function intersect(nums1, nums2) {
    const map = {};
    const result = [];
  
    for (const num of nums1) {
      map[num] = (map[num] || 0) + 1;
    }
  
    for (const num of nums2) {
      if (map[num] > 0) {
        result.push(num);
        map[num]--;
      }
    }
  
    return result;
  }
  
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const result = intersect(nums1, nums2);
  console.log(result); // Output: [2]
  