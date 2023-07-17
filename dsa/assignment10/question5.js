function countSubstrings(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (s[i] === s[j]) {
          count++;
        }
      }
    }
    
    return count;
  }
  
  const s = "abcab";
  const result = countSubstrings(s);
  console.log(result); // Output: 7
  