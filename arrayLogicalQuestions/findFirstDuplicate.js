function findFirstDuplicate(arr){
    let seen={};
    for(let i=0;i<arr.length;i++){
        if(seen[arr[i]]){
            return arr[i];
        }
        seen[arr[i]]=true;
    }
    return -1;

}
//Example
let arr=[1,2,3,4,5,1,2,3,4];
console.log(findFirstDuplicate(arr));