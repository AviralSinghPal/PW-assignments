function checkQueueForIncreasingOrder(queue) {
    const stack = [];
    let expected = 1;
  
    while (queue.length > 0) {
      const front = queue[0];
  
      if (front === expected) {
        queue.shift();
        expected++;
      } else if (front > expected) {
        stack.push(front);
        queue.shift();
      } else {
        if (stack.length === 0 || stack[stack.length - 1] !== expected) {
          return false;
        }
        stack.pop();
        expected++;
      }
    }
  
    while (stack.length > 0) {
      if (stack[stack.length - 1] !== expected) {
        return false;
      }
      stack.pop();
      expected++;
    }
  
    return true;
  }
  
  // Example usage:
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkQueueForIncreasingOrder(queue1)); // Output: true
  
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkQueueForIncreasingOrder(queue2)); // Output: false
  