function longestSubstringWithoutRepeating(s) {
    let maxLength = 0;  // To keep track of the maximum length found
    let start = 0;  // Start index of the current window
    let seen = {};  // To store the last seen index of each character

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }

        seen[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:nod
let inputString = "abcabcbb";
let result = longestSubstringWithoutRepeating(inputString);
console.log(result);  // Output: 3
