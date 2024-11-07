function alternateCase(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);//returns you an unicode character Ex-H=72
        if (i % 2 === 0) {
            // Convert to uppercase if index is even
            if (charCode >= 97 && charCode <= 122) {
                result += String.fromCharCode(charCode - 32);
            } else {
                result += str[i];
            }
        } else {
            // Convert to lowercase if index is odd
            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(charCode + 32);
            } else {
                result += str[i];
            }
        }
    }
    return result;
}

// Example usage:
var originalStr = "Hello World!";
var newStr = alternateCase(originalStr);
console.log(newStr); 
