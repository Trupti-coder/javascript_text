function isPalindrome(num) {
   
    let original = num;
    let reversed = 0;

    
    while (num > 0) {
        const digit = num % 10; 
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10); 
    }

    
    return original === reversed;
}


const number = 121; 
if (isPalindrome(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}
