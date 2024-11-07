function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

// Example usage:
let str1 = "racecar";
let str2 = "hello";
console.log(isPalindrome(str1));  // Output: true
console.log(isPalindrome(str2));  // Output: false
