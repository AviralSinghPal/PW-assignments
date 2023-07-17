function checkValidString(s) {
    let balance = 0;
    let asterisks = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "*") {
        balance++;
      } else {
        balance--;
      }
  
      if (balance < 0) {
        if (asterisks === 0) {
          return false;
        }
        asterisks--;
        balance++;
      }
    }
  
    balance = 0;
    asterisks = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ")" || s[i] === "*") {
        balance++;
      } else {
        balance--;
      }
  
      if (balance < 0) {
        if (asterisks === 0) {
          return false;
        }
        asterisks--;
        balance++;
      }
    }
  
    return true;
  }
  
  const s = "()";
  const result = checkValidString(s);
  console.log(result); // Output: true
  