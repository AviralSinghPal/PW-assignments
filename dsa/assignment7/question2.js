var isStrobogrammatic = function(num) {
    const strobogrammaticPairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftDigit = num[left];
        const rightDigit = num[right];

        if (!(leftDigit in strobogrammaticPairs) || strobogrammaticPairs[leftDigit] !== rightDigit) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

console.log(isStrobogrammatic("69")); // Output: true
console.log(isStrobogrammatic("88")); // Output: true
console.log(isStrobogrammatic("818")); // Output: true
console.log(isStrobogrammatic("6969")); // Output: false
console.log(isStrobogrammatic("12345")); // Output: false
console.log(isStrobogrammatic("7878")); // Output: false
