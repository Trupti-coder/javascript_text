// function toUpperCase(str) {
//     var upperStr = '';
//     for (var i = 0; i < str.length; i++) {
//         var charCode = str.charCodeAt(i);
//         // Check if the character is a lowercase letter
//         if (charCode >= 97 && charCode <= 122) {
//             // Convert to uppercase by subtracting 32 from the char code
//             upperStr += String.fromCharCode(charCode - 32);
//         } else {
//             // If it's not a lowercase letter, keep it as is
//             upperStr += str[i];
//         }
//     }
//     return upperStr;
// }

// // Example usage:
// var originalStr = "Hello World!";
// var upperStr = toUpperCase(originalStr);
// console.log(upperStr); // Output: "HELLO WORLD!"

function toUpperCase(str) {
    var upperStr = '';
    for (var i = 0; i < str.length; i++) {
        var Code = str.charCodeAt(i);
        if (Code >= 97 && Code <= 122) {
            upperStr += String.fromCharCode(Code - 32);//The difference between the lowercase and uppercase versions of the same letter is always 32.

        } else {
        
            upperStr += str[i];
        }
    }
    return upperStr;
}
var originalStr = "hello";
 var upperStr = toUpperCase(originalStr);
console.log(upperStr); // Output: "HELLO WORLD!"
