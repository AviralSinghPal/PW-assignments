function romanToInt(s) {
    const romanToIntMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const value = romanToIntMap[s[i]];
  
      if (value < prevValue) {
        result -= value;
      } else {
        result += value;
      }
  
      prevValue = value;
    }
  
    return result;
  }
  
  // Test Example 1
  console.log(romanToInt("III")); // Output: 3
  
  // Test Example 2
  console.log(romanToInt("LVIII")); // Output: 58
  