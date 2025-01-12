function longestConsecutiveSequence(nums){
    let set = {};
    for (let num of nums) {
        set[num] = true;
    }

    let maxLength = 0;


    for (let num of nums) {
        if (!set[num - 1]) {
            let length = 0;
            while (set[num + length]) {
                length++;
            }
            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}