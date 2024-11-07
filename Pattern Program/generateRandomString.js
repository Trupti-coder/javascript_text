function generateRandomString(input, length) {
    let result = '';
    const charactersLength = input.length;
    for (let i = 0; i < length; i++) {
        result += input.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Example usage:
const userInput = 'abcs123de';
const stringLength = 8;
const randomString = generateRandomString(userInput, stringLength);
console.log(randomString);
