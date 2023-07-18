function nthUglyNumber(n) {
    const uglyNumbers = [1];
    let p2 = 0, p3 = 0, p5 = 0;
  
    while (uglyNumbers.length < n) {
      const nextUglyNumber = Math.min(
        uglyNumbers[p2] * 2,
        uglyNumbers[p3] * 3,
        uglyNumbers[p5] * 5
      );
  
      if (nextUglyNumber === uglyNumbers[p2] * 2) p2++;
      if (nextUglyNumber === uglyNumbers[p3] * 3) p3++;
      if (nextUglyNumber === uglyNumbers[p5] * 5) p5++;
  
      uglyNumbers.push(nextUglyNumber);
    }
  
    return uglyNumbers[n - 1];
  }
  
  // Test Example 1
  console.log(nthUglyNumber(10)); // Output: 12
  
  // Test Example 2
  console.log(nthUglyNumber(1)); // Output: 1
  