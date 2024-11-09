function maxProduct(nums){
    for(let i=0;i<nums.length-1;i++){
        let maxIndex=i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[maxIndex]){
                maxIndex=j;
            }
        }
        let temp=nums[i];
        nums[i]=nums[maxIndex];
        nums[maxIndex]=temp;
    }
    return nums[0]*nums[1];
}

let nums=[1,20,30,4,6,2,70];
console.log(maxProduct(nums));