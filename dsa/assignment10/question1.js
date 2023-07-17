function isPowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
    
    while (n % 3 === 0) {
      n /= 3;
    }
    
    return n === 1;
  }
  
  const n = 27;
  const result = isPowerOfThree(n);
  console.log(result); // Output: true
  