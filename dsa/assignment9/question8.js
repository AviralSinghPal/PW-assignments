function productOfArray(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    
    return product;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const result = productOfArray(arr);
  console.log(result); // Output: 120
  