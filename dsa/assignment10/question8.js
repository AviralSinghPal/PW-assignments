function countConsonants(str) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (!vowels.has(str[i]) && str[i].match(/[a-zA-Z]/)) {
        count++;
      }
    }
    
    return count;
  }
  
  const str = "Hello, World!";
  const result = countConsonants(str);
  console.log(result); // Output: 7
  