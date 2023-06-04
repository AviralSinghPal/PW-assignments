function firstUniqueChar(s) {
  const frequencyMap = {};
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencyMap[char] === 1) {
      return i;
    }
  }
  
  return -1;
}

console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));
