class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (!root) return null;
  
    let prev = null;
    let head = null;
  
    function convertToDLL(node) {
      if (!node) return;
  
      convertToDLL(node.left);
  
      if (prev) {
        prev.right = node;
        node.left = prev;
      } else {
        head = node;
      }
  
      prev = node;
  
      convertToDLL(node.right);
    }
  
    convertToDLL(root);
  
    return head;
  }
  
  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  let currentNode = convertToDoublyLinkedList(root);
  
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.right;
  }
  