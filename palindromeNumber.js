function isPalindromeNumber(num) {
    // Negative numbers are not palindromes
    if (num < 0) {
        return false;
    }

    // Store the original number
    let originalNum = num;
    let reversedNum = 0;

    // Reverse the number
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversedNum = reversedNum * 10 + digit; // Add it to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }

    // Check if the original number and reversed number are the same
    return originalNum === reversedNum;
}

// Test the function
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(-121)); // false
console.log(isPalindromeNumber(123)); // false
console.log(isPalindromeNumber(0)); // true



