function power(N, P) {
    if (P === 0) {
      return 1;
    }
    
    return N * power(N, P - 1);
  }
  
  const N = 5;
  const P = 2;
  const result = power(N, P);
  console.log(result); // Output: 25
  