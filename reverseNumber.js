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



