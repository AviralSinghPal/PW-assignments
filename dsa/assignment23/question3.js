function rightView(root) {
    if (!root) return [];
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (i === levelSize - 1) result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    return result;
  }
  
  // Test Example
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.left.right.right = new TreeNode(5);
  root.left.right.right.right = new TreeNode(6);
  
  console.log(rightView(root)); // Output: [1, 3, 6]
  