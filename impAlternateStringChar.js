function alternateStrings(s1, s2) {
    let result = '';
    let maxLength = s1.length > s2.length ? s1.length : s2.length;

    // Loop through both strings up to the length of the longer string
    for (let i = 0; i < maxLength; i++) {
        if (i < s1.length) {
            // Append character from s1 if it exists
            let code1 = s1.charCodeAt(i);
            result += String.fromCharCode(code1);
        }
        
        if (i < s2.length) {
            // Append character from s2 if it exists
            let code2 = s2.charCodeAt(i);
            result += String.fromCharCode(code2);
        }
    }

    return result;
}

// Example usage
let s1 = "abc";
let s2 = "12345";
console.log(alternateStrings(s1, s2)); // Output: "a1b2c345"
