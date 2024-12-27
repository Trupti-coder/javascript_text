function binaryToDecimal(binaryStr) {
    let decimal = 0;
    let length = binaryStr.length;

    for (let i = 0; i < length; i++) {
        let bit = parseInt(binaryStr[i]); // Convert character to number
        let power = length - 1 - i; // Calculate power of 2
        decimal += bit * Math.pow(2, power); // Add bit * 2^power
    }

    return decimal;
}

console.log(binaryToDecimal("1101")); // Output: 13
