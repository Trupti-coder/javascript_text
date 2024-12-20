function maxSubarraySum(arr) {
    let maxSum = -Infinity, currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
 
}