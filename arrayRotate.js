function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle if k is greater than the array length
    let result = [];

    // Fill the rotated positions in the result array
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = arr[i];
    }

    // Copy the result array back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = result[i];
    }

    return arr;
}

// Example usage:
let array = [1, 2, 3, 4, 5];
let rotatedArray = rotateArray(array, 2);
console.log(rotatedArray);  // Output: [4, 5, 1, 2, 3]
