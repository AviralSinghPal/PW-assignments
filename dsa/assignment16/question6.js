function reverseFirstKElementsOfQueue(queue, k) {
    if (k <= 0 || k > queue.length) return queue;
  
    const stack = [];
  
    // Remove the first k elements from the queue and push them into the stack
    for (let i = 0; i < k; i++) {
      stack.push(queue.shift());
    }
  
    // Pop elements from the stack and enqueue them back in reverse order
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    // Rotate the remaining elements to the front
    for (let i = 0; i < queue.length - k; i++) {
      queue.push(queue.shift());
    }
  
    return queue;
  }
  
  // Example usage:
  const queue1 = [1, 2, 3, 4, 5];
  console.log(reverseFirstKElementsOfQueue(queue1, 3)); // Output: [3, 2, 1, 4, 5]
  
  const queue2 = [10, 20, 30, 40, 50, 60, 70];
  console.log(reverseFirstKElementsOfQueue(queue2, 5)); // Output: [50, 40, 30, 20, 10, 60, 70]
  