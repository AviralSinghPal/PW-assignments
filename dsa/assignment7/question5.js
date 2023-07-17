function reverseStr(s, k) {
    const chars = s.split("");
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, chars.length - 1);
  
      while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
      }
    }
  
    return chars.join("");
  }
  
  const s = "abcdefg";
  const k = 2;
  const result = reverseStr(s, k);
  console.log(result); // Output: "bacdfeg"
  