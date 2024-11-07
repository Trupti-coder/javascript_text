function countVowels(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
            for (let k = 0; k < vowels.length; k++) {
                if (str[j] === vowels[k]) {
                    vowelCount++;
                }
            }
        }
    }

    return vowelCount;
}

let words = ["hello", "world", "javascript", "is", "awesome"];
let totalVowels = countVowels(words);
console.log(totalVowels); // Output: 10
