class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBSTFromLevelOrder(arr) {
    if (arr.length === 0) return null;
  
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let index = 1;
  
    while (index < arr.length) {
      const node = queue.shift();
  
      if (arr[index] < node.val) {
        node.left = new TreeNode(arr[index]);
        queue.push(node.left);
      }
  
      index++;
  
      if (index < arr.length && arr[index] > node.val) {
        node.right = new TreeNode(arr[index]);
        queue.push(node.right);
      }
  
      index++;
    }
  
    return root;
  }
  
  // Example usage:
  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const root = constructBSTFromLevelOrder(arr);
  
  // Function to print the tree (Inorder traversal)
  function printInorder(node) {
    if (!node) return;
  
    printInorder(node.left);
    console.log(node.val);
    printInorder(node.right);
  }
  
  printInorder(root);
  