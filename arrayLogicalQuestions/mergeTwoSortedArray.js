function mergeSortedArray(arr1,arr2){
    let merged=new Array(arr1.length+arr2.length)
    let i=0; let j=0;let k=0;
    for(i<arr1.length;i++ && j<arr2.length;j++){
        if(arr1[i]<arr2[j]){
            merged[k++]=arr1[i++];

        }
        else{
            merged[k++]=arr2[j++];
        }
    }
    while(i<arr1.length){
        merged[k++]=arr1[i++];
    }

    while(j<arr2.length){
        merged[k++]=arr2[i];
    }

    return merged;
}