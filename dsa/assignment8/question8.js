function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const count = new Array(26).fill(0);
  
      for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
      }
  
      for (let c of count) {
        if (c > 1) {
          return true;
        }
      }
  
      return false;
    }
  
    const pairs = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        pairs.push([s[i], goal[i]]);
      }
  
      if (pairs.length > 2) {
        return false;
      }
    }
  
    return pairs.length === 2 && pairs[0].join("") === pairs[1].reverse().join("");
  }
  
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true
  