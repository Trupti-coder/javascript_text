function reverseNumber(number) {
    let reversed = 0;

    while (number > 0) {
        // Extract the last digit
        let lastDigit = number % 10;

        // Build the reversed number
        reversed = reversed * 10 + lastDigit;

        // Remove the last digit from the original number
        number = (number - lastDigit) / 10;
    }

    return reversed;
}
// Test the function
console.log(reverseNumber(1234));  // Outputs: 4321
console.log(reverseNumber(9876));  // Outputs: 6789
console.log(reverseNumber(100));   // Outputs: 1



