function nthTerm(a, d, N) {
    return a + (N - 1) * d;
  }
  
  const a = 5;
  const d = 2;
  const N = 10;
  const result = nthTerm(a, d, N);
  console.log(result); // Output: 23
  