function reverseString(s) {
    const stack = [];
    for (const char of s) {
      stack.push(char);
    }
    return stack.reverse().join('');
  }
  
  // Test Example
  const s = "GeeksforGeeks";
  console.log(reverseString(s)); // Output: "skeeGrofskeeG"
  