function lastRemaining(n) {
    let leftToRight = true;
    let remaining = n;
    let step = 1;
    let head = 1;
    
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        head += step;
      }
      
      remaining /= 2;
      step *= 2;
      leftToRight = !leftToRight;
    }
    
    return head;
  }
  
  const n = 9;
  const result = lastRemaining(n);
  console.log(result); // Output: 6
  