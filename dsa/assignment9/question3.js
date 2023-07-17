function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    
    return n * factorial(n - 1);
  }
  
  const n = 4;
  const result = factorial(n);
  console.log(result); // Output: 24
  