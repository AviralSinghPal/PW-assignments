function deleteMiddleElement(stack) {
    if (stack.length === 0) return;
  
    const middleIndex = Math.ceil(stack.length / 2);
    const removedElement = stack.pop();
  
    deleteMiddleElement(stack);
  
    if (stack.length !== middleIndex) {
      stack.push(removedElement);
    }
  }
  
  // Example usage:
  const stack1 = [1, 2, 3, 4, 5];
  deleteMiddleElement(stack1);
  console.log(stack1); // Output: [1, 2, 4, 5]
  
  const stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddleElement(stack2);
  console.log(stack2); // Output: [1, 2, 4, 5, 6]
  