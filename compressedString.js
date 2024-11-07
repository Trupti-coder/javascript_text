function compressString(input) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        // Check if the next character is the same
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            // Append the character and its count to the compressed string
            compressed += input[i] + count;
            count = 1; // Reset count for the next character
        }
    }

    return compressed; // Return the compressed string
}

// Example usage:
const inputString = "aabbcc";
console.log(compressString(inputString)); // Output: "a2b2c2"
