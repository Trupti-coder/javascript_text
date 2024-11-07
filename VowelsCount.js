// Function to count the number of vowels in a string
function countVowels(str) {
    // Define a string containing all vowels
    const vowels = "aeiouAEIOU";
    // Initialize a counter for vowels
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.indexOf(str[i]) !== -1) {
            count++; // Increment the counter if it's a vowel
        }
    }

    // Return the total count of vowels
    return count;
}

// Example usage
console.log(countVowels("Hello World")); // Output: 3
