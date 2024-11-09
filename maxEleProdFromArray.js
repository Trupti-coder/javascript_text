function maxProduct(nums){
    for(let i=0;i<nums.length-1;i++){
        let maxIndex=i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>maxIndex[j]){
                maxIndex=j;
            }
        }
        let temp=nums[i];
        nums[i]=maxIndex[j];
        maxIndex[j]=temp;
    }
    return nums[0]*nums[1];
    

}