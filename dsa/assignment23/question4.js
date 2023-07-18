class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.horizontalDistance = 0;
    }
  }
  
  function bottomView(root) {
    if (!root) return [];
  
    const queue = [root];
    const map = new Map();
  
    while (queue.length > 0) {
      const node = queue.shift();
      map.set(node.horizontalDistance, node.val);
  
      if (node.left) {
        node.left.horizontalDistance = node.horizontalDistance - 1;
        queue.push(node.left);
      }
  
      if (node.right) {
        node.right.horizontalDistance = node.horizontalDistance + 1;
        queue.push(node.right);
      }
    }
  
    return Array.from(map.values());
  }
  
  // Test Example
  const root = new TreeNode(20);
  root.left = new TreeNode(8);
  root.right = new TreeNode(22);
  root.left.left = new TreeNode(5);
  root.left.right = new TreeNode(3);
  root.right.right = new TreeNode(25);
  root.left.right.left = new TreeNode(10);
  root.left.right.right = new TreeNode(14);
  
  console.log(bottomView(root)); // Output: [5, 10, 3, 14, 25]
  