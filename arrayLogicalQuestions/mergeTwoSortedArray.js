function mergeSortedArray(arr1,arr2){
    let merged=new Array(arr1.length + arr2.length);
    let i=0; let j=0;let k=0;
    while(i<arr1.length && j<arr2.length) {
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
        merged[k++]=arr2[j++];
    }

    return merged;
}

// Input
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergeSortedArray(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]