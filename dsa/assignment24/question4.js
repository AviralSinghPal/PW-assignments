function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
    }
  
    return Array.from(map.values());
  }
  
  // Test Example 1
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
  
  // Test Example 2
  console.log(groupAnagrams([""])); // Output: [[""]]
  
  // Test Example 3
  console.log(groupAnagrams(["a"])); // Output: [["a"]]
  