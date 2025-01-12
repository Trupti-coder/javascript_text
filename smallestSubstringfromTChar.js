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
}