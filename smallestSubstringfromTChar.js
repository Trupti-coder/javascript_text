function smallestSubstringTChar(){
    let minLength = Infinity;
    let minStart = 0;
    let start = 0;
    let charCount = {};

    for (let i = 0; i < t.length; i++) {
        if (!charCount[t[i]]) {
            charCount[t[i]] = 0;
        }
        charCount[t[i]]++;
    }

    let count = Object.keys(charCount).length;

    for (let end = 0; end < s.length; end++) {
        if (charCount[s[end]] !== undefined) {
            charCount[s[end]]--;
            if (charCount[s[end]] === 0) {
                count--;
            }
        }
}