function findDepth(preorder) {
    let depth = 0;
    let maxDepth = 0;
    for (const ch of preorder) {
      if (ch === 'n') {
        depth++;
        maxDepth = Math.max(maxDepth, depth);
      } else {
        depth--;
      }
    }
    return maxDepth;
  }
  
  // Test Example 1
  console.log(findDepth('nlnll')); // Output: 2
  
  // Test Example 2
  console.log(findDepth('nlnnlll')); // Output: 3
  