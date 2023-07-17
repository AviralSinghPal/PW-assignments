class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistanceBetweenNodes(root, node1, node2) {
    function findLCA(root, p, q) {
      if (!root) return null;
  
      if (root.val > p && root.val > q) {
        return findLCA(root.left, p, q);
      } else if (root.val < p && root.val < q) {
        return findLCA(root.right, p, q);
      } else {
        return root;
      }
    }
  
    function findDistanceFromLCA(node, target, distance) {
      if (!node) return 0;
  
      if (node.val === target) return distance;
  
      return (
        findDistanceFromLCA(node.left, target, distance + 1) ||
        findDistanceFromLCA(node.right, target, distance + 1)
      );
    }
  
    const LCA = findLCA(root, node1, node2);
    const dist1 = findDistanceFromLCA(LCA, node1, 0);
    const dist2 = findDistanceFromLCA(LCA, node2, 0);
  
    return dist1 + dist2;
  }
  
  // Example usage:
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  console.log(findDistanceBetweenNodes(root, 6, 14)); // Output: 4
  console.log(findDistanceBetweenNodes(root, 3, 4)); // Output: 2
  