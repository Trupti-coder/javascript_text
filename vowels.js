function isDuplicate(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        var isDuplicate=false;
        for(let j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                isDuplicate=true;
                break;

            }
        }
        if(!isDuplicate){
            result.push(arr[i]);
        }
    }
    return result;
    
}