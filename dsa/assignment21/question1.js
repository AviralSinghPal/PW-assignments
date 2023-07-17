class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToBST(root) {
    const arr = [];
  
    function inOrderTraversal(node) {
      if (!node) return;
  
      inOrderTraversal(node.left);
      arr.push(node.val);
      inOrderTraversal(node.right);
    }
  
    inOrderTraversal(root);
  
    arr.sort((a, b) => a - b);
  
    function constructBST(arr) {
      if (arr.length === 0) return null;
  
      const mid = Math.floor(arr.length / 2);
      const root = new TreeNode(arr[mid]);
  
      root.left = constructBST(arr.slice(0, mid));
      root.right = constructBST(arr.slice(mid + 1));
  
      return root;
    }
  
    return constructBST(arr);
  }
  
  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  const newBST = convertToBST(root);
  
  // Function to print the tree (Inorder traversal)
  function printInorder(node) {
    if (!node) return;
  
    printInorder(node.left);
    console.log(node.val);
    printInorder(node.right);
  }
  
  printInorder(newBST);
  