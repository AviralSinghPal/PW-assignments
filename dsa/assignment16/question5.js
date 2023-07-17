function reverseNumberUsingStack(num) {
    const numString = num.toString();
    const stack = [];
  
    for (const digit of numString) {
      stack.push(digit);
    }
  
    let reversedString = "";
  
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return parseInt(reversedString, 10);
  }
  
  // Example usage:
  console.log(reverseNumberUsingStack(365)); // Output: 563
  console.log(reverseNumberUsingStack(6899)); // Output: 9986
  