function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  function str2tree(s) {
    if (!s) {
      return null;
    }
  
    const stack = [];
    let num = "";
    let root = null;
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === "(") {
        stack.push(root);
        root = null;
      } else if (char === ")") {
        const node = stack.pop();
  
        if (node.left === null) {
          node.left = root;
        } else {
          node.right = root;
        }
  
        root = node;
      } else {
        num += char;
  
        if (i === s.length - 1 || s[i + 1] === "(" || s[i + 1] === ")") {
          root = new TreeNode(parseInt(num));
          num = "";
        }
      }
    }
  
    return root;
  }
  
  const s = "4(2(3)(1))(6(5))";
  const result = str2tree(s);
  console.log(result);
  // Output: [4,2,6,3,1,5]
  