class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (!root) return null;
  
    const queue = [root, null];
    let prevNode = null;
  
    while (queue.length) {
      const node = queue.shift();
  
      if (node) {
        node.next = queue[0];
        prevNode = node;
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      } else {
        if (!queue.length) break;
        queue.push(null);
        prevNode = null;
      }
    }
  
    return root;
  }
  
  // Function to print the tree (Level order traversal with next pointers)
  function printTreeWithNextPointers(root) {
    let currentLevel = root;
  
    while (currentLevel) {
      let currentNode = currentLevel;
  
      while (currentNode) {
        process.stdout.write(currentNode.val.toString());
  
        if (currentNode.next) process.stdout.write(" -> ");
        currentNode = currentNode.next;
      }
  
      console.log();
      currentLevel = currentLevel.left;
    }
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  connectNodesAtSameLevel(root);
  printTreeWithNextPointers(root);
  