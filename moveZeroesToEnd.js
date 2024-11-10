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
const nums=[0,1,4,5,7,0,3,0,9];
console.log(moveZeroesToEnd(nums));