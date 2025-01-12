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

        while (count === 0) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1;
                minStart = start;
            }
            if (charCount[s[start]] !== undefined) {
                charCount[s[start]]++;
                if (charCount[s[start]] > 0) {
                    count++;
                }
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}