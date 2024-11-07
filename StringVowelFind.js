function findVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var foundVowels = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        for (var j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                foundVowels += str[i];
                break;
            }
        }
    }

    return foundVowels;
}

// Example usage:
var originalStr = "Hello World!";
var vowelsInStr = findVowels(originalStr);
console.log(vowelsInStr); // Output: "eoo"
