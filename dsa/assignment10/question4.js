function stringLength(str) {
    if (str === "") {
      return 0;
    }
    
    return 1 + stringLength(str.slice(1));
  }
  
  const str = "GEEKSFORGEEKS";
  const result = stringLength(str);
  console.log(result); // Output: 13
  