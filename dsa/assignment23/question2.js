class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function leftView(root) {
    if (!root) return [];
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (i === 0) result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    return result;
  }
  
  // Test Example
  const root = new TreeNode(4);
  root.left = new TreeNode(5);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(1);
  root.right.left.left = new TreeNode(6);
  root.right.left.right = new TreeNode(7);
  
  console.log(leftView(root)); // Output: [4, 5, 3, 6]
  