function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort function to manually sort characters in a string
    function sortString(str) {
        let arr = str.split('');
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr.join('');
    }

    // Sort both strings and compare
    let sortedStr1 = sortString(str1);
    let sortedStr2 = sortString(str2);

    return sortedStr1 === sortedStr2;
}

// Example usage:
let str1 = "listen";
let str2 = "silent";
console.log(areAnagrams(str1, str2));  // Output: true
