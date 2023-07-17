function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
    
    while (n % 2 === 0) {
      n /= 2;
    }
    
    return n === 1;
  }
  
  const n = 16;
  const result = isPowerOfTwo(n);
  console.log(result); // Output: true
  