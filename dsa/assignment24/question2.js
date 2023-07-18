function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    const charIndexMap = {};
  
    for (let right = 0; right < s.length; right++) {
      if (s[right] in charIndexMap) {
        left = Math.max(left, charIndexMap[s[right]] + 1);
      }
  
      charIndexMap[s[right]] = right;
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  
  // Test Example 1
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  
  // Test Example 2
  console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
  
  // Test Example 3
  console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
  