function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxSum = nums[0]; // Start with the first element as the maximum sum.
    let currentSum = nums[0]; // Initialize the current sum with the first element.

    // Loop through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // Determine the larger value between nums[i] and (currentSum + nums[i]).
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i]; // Start a new subarray.
        } else {
            currentSum = currentSum + nums[i]; // Extend the current subarray.
        }

        // Update maxSum if currentSum is greater.
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum; // Return the largest sum.
}
