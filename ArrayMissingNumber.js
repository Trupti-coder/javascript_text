function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = 0;

    // Calculate the sum of the array elements manually
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];

    }

    // The missing number is the difference between the expected sum and the actual sum
    let missingNumber = totalSum - arraySum;
    return missingNumber;
}

// Example usage
let arr = [1, 2, 4, 5, 6];
let missingNumber = findMissingNumber(arr);
console.log(`The missing number is: ${missingNumber}`);
