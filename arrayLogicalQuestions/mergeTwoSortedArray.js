function mergeSortedArray(arr1,arr2){
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

     // Compare elements from both arrays and add the smaller one to the merged array
     while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

}