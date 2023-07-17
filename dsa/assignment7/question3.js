function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? Number(num1[i]) : 0;
      const digit2 = j >= 0 ? Number(num2[j]) : 0;
      const sum = digit1 + digit2 + carry;
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
      i--;
      j--;
    }
  
    return result;
  }
  
  const num1 = "11";
  const num2 = "123";
  const result = addStrings(num1, num2);
  console.log(result); // Output: "134"
  