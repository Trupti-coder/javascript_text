function convertZeroToOne(number) {
    let result = 0;
    let place = 1;

    while (number > 0) {
        let digit = number % 10;
        if (digit === 0) {
            digit = 1;
        }
        result = result + digit * place;
        number = Math.floor(number / 10);
        place = place * 10;
    }

    return result;
}
console.log(convertZeroToOne(125020501));

 
 
 //Example usage
let originalNumber = 125020501;
let convertedNumber = convertZeroToOne(originalNumber);
console.log(`Original Number: ${originalNumber}`);
console.log(`Converted Number: ${convertedNumber}`);









































