function removeFalsyValue(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            result.push(arr[i]);
        }
    }
    return result;

}
const arr=[0,1,false,2,"",3,NaN,4,undefined,null];
console.log(removeFalsyValue(arr));
