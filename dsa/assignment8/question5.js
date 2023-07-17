function compress(chars) {
    let count = 1;
    let index = 0;
  
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === chars[i + 1]) {
        count++;
      } else {
        chars[index] = chars[i];
  
        if (count > 1) {
          const countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[++index] = countStr[j];
          }
        }
  
        index++;
        count = 1;
      }
    }
  
    return index;
  }
  
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const result = compress(chars);
  console.log(result); // Output: 6
  console.log(chars.slice(0, result)); // Output: ["a", "2", "b", "2", "c", "3"]
  