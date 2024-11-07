function rotateArray(arr, steps) {
    const n = arr.length;
    steps = steps % n; // Handle cases where steps > n

    // Helper function to reverse a portion of the array
    function reverse(arr, start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first part
    reverse(arr, 0, steps - 1);
    // Reverse the second part
    reverse(arr, steps, n - 1);

    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray([10, 20, 30, 40, 50], 3)); // [30, 40, 50, 10, 20]
