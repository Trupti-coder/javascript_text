function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0; // or throw an error depending on your requirements
    }

    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum to include the current number
        // or start a new subarray with the current number if it's larger
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maxSum if currentSum is larger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(array)); // Output: 6
