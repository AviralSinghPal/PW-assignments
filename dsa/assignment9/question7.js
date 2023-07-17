function swap(str, i, j) {
    const arr = str.split("");
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join("");
  }
  
  function permutationsUtil(str, left, right, result) {
    if (left === right) {
      result.push(str);
    } else {
      for (let i = left; i <= right; i++) {
        str = swap(str, left, i);
        permutationsUtil(str, left + 1, right, result);
        str = swap(str, left, i);
      }
    }
  }
  
  function permutations(s) {
    const result = [];
    permutationsUtil(s, 0, s.length - 1, result);
    return result;
  }
  
  const s = "ABC";
  const result = permutations(s);
  console.log(result); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  