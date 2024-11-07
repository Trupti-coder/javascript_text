function reverseWords(input) {
    let reversed = '';
    let word = '';

    // Iterate through the string from the end to the beginning
    for (let i = input.length - 1; i >= 0; i--) {
        // If the character is not a space, add it to the current word
        if (input[i] !== ' ') {
            word = input[i] + word; // Prepend the character to the word
        } else if (word) {
            // If we hit a space and have a word, add it to the result
            reversed += word + ' ';
            word = ''; // Reset word for the next word
        }
    }

    // Add the last word if it exists
    if (word) {
        reversed += word;
    }

    return reversed.trim(); // Remove any trailing spaces
}

// Example usage:
const inputString = "Hello World from ChatGPT";
console.log(reverseWords(inputString)); // Output: "ChatGPT from World Hello"
