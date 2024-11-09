function firstUnique(nums){
    let counts={};
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        if(counts[num]===undefined){
            counts[num]=1;
        }
        else{
            counts[num]+=1;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(counts[nums[i]]===1){
            return nums[i];
        }
    }
    return -1;
}
const nums=[4,5,1,2,0,4,1,2];
console.log(firstUnique(nums));