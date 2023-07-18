function evaluatePostfix(expression) {
    const stack = [];
  
    for (const char of expression) {
      if (!isNaN(char)) {
        stack.push(parseInt(char));
      } else {
        const num2 = stack.pop();
        const num1 = stack.pop();
        switch (char) {
          case '+':
            stack.push(num1 + num2);
            break;
          case '-':
            stack.push(num1 - num2);
            break;
          case '*':
            stack.push(num1 * num2);
            break;
          case '/':
            stack.push(Math.floor(num1 / num2));
            break;
        }
      }
    }
  
    return stack.pop();
  }
  
  // Test Example 1
  const expression1 = "231*+9-";
  console.log(evaluatePostfix(expression1)); // Output: -4
  
  // Test Example 2
  const expression2 = "123+*8-";
  console.log(evaluatePostfix(expression2)); // Output: -3
  