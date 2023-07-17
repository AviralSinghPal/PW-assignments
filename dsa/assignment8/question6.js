function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
  
    for (let i = 0; i < p.length; i++) {
      pCount[p.charCodeAt(i) - 97]++;
      sCount[s.charCodeAt(i) - 97]++;
    }
  
    for (let i = p.length; i < s.length; i++) {
      if (isEqual(pCount, sCount)) {
        result.push(i - p.length);
      }
  
      sCount[s.charCodeAt(i - p.length) - 97]--;
      sCount[s.charCodeAt(i) - 97]++;
    }
  
    if (isEqual(pCount, sCount)) {
      result.push(s.length - p.length);
    }
  
    return result;
  }
  
  function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]
  