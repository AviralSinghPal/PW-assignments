function insertAtBottom(stack, value) {
    if (stack.length === 0) {
      stack.push(value);
      return;
    }
    const temp = stack.pop();
    insertAtBottom(stack, value);
    stack.push(temp);
  }
  
  function reverseStack(stack) {
    if (stack.length) {
      const temp = stack.pop();
      reverseStack(stack);
      insertAtBottom(stack, temp);
    }
  }
  
  // Test Example 1
  const stack1 = [3, 2, 1, 7, 6];
  reverseStack(stack1);
  console.log(stack1); // Output: [6, 7, 1, 2, 3]
  
  // Test Example 2
  const stack2 = [4, 3, 9, 6];
  reverseStack(stack2);
  console.log(stack2); // Output: [6, 9, 3, 4]
  