function backspaceCompare(s, t) {
    return buildString(s) === buildString(t);
  }
  
  function buildString(str) {
    const result = [];
  
    for (let char of str) {
      if (char !== "#") {
        result.push(char);
      } else {
        result.pop();
      }
    }
  
    return result.join("");
  }
  
  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result); // Output: true
  