function subarraySum(nums,k){
    let count = 0;
    let sum = 0;
    let sumMap = { 0: 1 };

    for (let num of nums) {
        sum += num;
        if (sumMap[sum - k]) {
            count += sumMap[sum - k];
        }

        if (!sumMap[sum]) {
            sumMap[sum] = 0;
        }
        sumMap[sum]++;
    }
    return count;
}