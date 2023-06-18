// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

//  Example 1:
// Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
// Constraints:

// 0 <= x <= 231 - 1

function mySqrt(x) {
    if (x === 0 || x === 1) {
      return x;
    }
  
    let left = 0;
    let right = x;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (mid * mid === x) {
        return mid;
      } else if (mid * mid > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return right;
  }
  
 console.log(mySqrt(9));
 console.log(mySqrt(8));
  mySqrt(8);
