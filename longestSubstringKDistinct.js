function longestSubstringKDistinct(){
    let maxLength = 0;
    let start = 0;
    let charCount = {};

    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
}