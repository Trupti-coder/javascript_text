function moveZeroesToEnd(nums){
    let nonZeroIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[nonZeroIndex];
            nums[nonZeroIndex]=nums[i];
            nums[i]=temp;

            nonZeroIndex++;
        }
    }
    return nums;
}