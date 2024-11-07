function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return { vowelCount, consonantCount };
}

// Example usage:
const result = countVowelsAndConsonants("hello world");
console.log(result); // Output: { vowelCount: 3, consonantCount: 7 }
