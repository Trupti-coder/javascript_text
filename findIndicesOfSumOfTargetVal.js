function findIndices(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }

}
let arr=[1,4,6,9,3];
let target=12;
console.log(findIndices(arr,target));