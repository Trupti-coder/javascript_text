function toLowerCase(str) {
    var lowerStr = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        // Check if the character is an uppercase letter
        if (charCode >= 65 && charCode <= 90) {
            // Convert to lowercase by adding 32 to the char code
            lowerStr += String.fromCharCode(charCode + 32);
        } else {
            // If it's not an uppercase letter, keep it as is
            lowerStr += str[i];
        }
    }
    return lowerStr;
}

// Example usage:
var originalStr = "Hello World!";
var lowerStr = toLowerCase(originalStr);
console.log(lowerStr); // Output: "hello world!"
