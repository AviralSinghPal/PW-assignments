function subsetsUtil(set, subset, index, result) {
    if (index === set.length) {
      result.push(subset);
      return;
    }
    
    subsetsUtil(set, subset, index + 1, result);
    subsetsUtil(set, subset + set[index], index + 1, result);
  }
  
  function subsets(s) {
    const result = [];
    subsetsUtil(s, "", 0, result);
    return result;
  }
  
  const set = "abc";
  const result = subsets(set);
  console.log(result); // Output: ["", "a", "b", "c", "ab", "ac", "bc", "abc"]
  